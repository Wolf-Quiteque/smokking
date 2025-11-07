'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe (only if key is available)
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

function CheckoutForm({ customerInfo, onSuccess, onError, totalAmount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
          payment_method_data: {
            billing_details: {
              name: customerInfo.name,
              email: customerInfo.email,
              phone: customerInfo.phone,
              address: {
                line1: customerInfo.address,
              },
            },
          },
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message);
        onError(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred.');
      onError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment-element-container" style={{ marginBottom: '20px' }}>
        <PaymentElement />
      </div>

      {errorMessage && (
        <div className="alert alert-danger" style={{ marginBottom: '15px' }}>
          <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="btn btn-primary btn-lg btn-block"
        style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          cursor: isProcessing || !stripe ? 'not-allowed' : 'pointer',
          opacity: isProcessing || !stripe ? 0.6 : 1,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
        }}
      >
        {isProcessing ? (
          <>
            <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
            Processing...
          </>
        ) : (
          <>
            <i className="fas fa-lock" style={{ marginRight: '10px' }}></i>
            Pay ${totalAmount.toFixed(2)}
          </>
        )}
      </button>

      <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#666' }}>
        <i className="fas fa-shield-alt" style={{ marginRight: '5px', color: '#28a745' }}></i>
        Secure payment powered by Stripe
      </div>
    </form>
  );
}

export default function CheckoutModal({ isOpen, onClose, cart, totalAmount, onPaymentSuccess }) {
  const [clientSecret, setClientSecret] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setShowPaymentForm(false);
      setClientSecret('');
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
      setValidationErrors({});
    }
  }, [isOpen]);

  const validateForm = () => {
    const errors = {};

    if (!customerInfo.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!customerInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      errors.email = 'Email is invalid';
    }

    if (!customerInfo.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(customerInfo.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!customerInfo.address.trim()) {
      errors.address = 'Address is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCustomerInfoSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          cartItems: cart,
          customerInfo,
        }),
      });

      const data = await response.json();

      if (data.error) {
        alert('Error creating payment: ' + data.error);
        setIsLoading(false);
        return;
      }

      setClientSecret(data.clientSecret);
      setShowPaymentForm(true);
      setIsLoading(false);
    } catch (error) {
      alert('Error: ' + error.message);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handlePaymentSuccess = (paymentIntent) => {
    onPaymentSuccess(paymentIntent);
    onClose();
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
  };

  if (!isOpen) return null;

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#ff6b35',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Rubik, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className={`modal-backdrop fade ${isOpen ? 'show' : ''}`}
        style={{
          display: isOpen ? 'block' : 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1050,
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`modal fade ${isOpen ? 'show' : ''}`}
        style={{
          display: isOpen ? 'block' : 'none',
          zIndex: 1055,
        }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content" style={{
            borderRadius: '15px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            border: 'none',
          }}>
            {/* Modal Header */}
            <div className="modal-header" style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              padding: '20px 30px',
            }}>
              <h5 className="modal-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                <i className="fas fa-shopping-bag" style={{ marginRight: '10px' }}></i>
                Secure Checkout
              </h5>
              <button
                type="button"
                className="close"
                onClick={onClose}
                style={{
                  color: 'white',
                  opacity: 1,
                  fontSize: '28px',
                  fontWeight: 'lighter',
                  textShadow: 'none',
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body" style={{ padding: '30px' }}>
              {/* Order Summary */}
              <div className="order-summary" style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '25px',
              }}>
                <h6 style={{ marginBottom: '15px', fontWeight: 'bold', color: '#333' }}>
                  Order Summary ({cart.length} items)
                </h6>
                <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '15px' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: '1px solid #dee2e6',
                    }}>
                      <span style={{ color: '#666' }}>
                        {item.quantity}x {item.name}
                      </span>
                      <span style={{ fontWeight: 'bold', color: '#ff6b35' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '15px',
                  borderTop: '2px solid #dee2e6',
                }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Total:</span>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b35' }}>
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Customer Information Form or Payment Form */}
              {!showPaymentForm ? (
                <form onSubmit={handleCustomerInfoSubmit}>
                  <h6 style={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
                    <i className="fas fa-user-circle" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                    Your Information
                  </h6>

                  <div className="form-group">
                    <label htmlFor="name" style={{ fontWeight: '600', color: '#555' }}>
                      Full Name <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ced4da',
                      }}
                    />
                    {validationErrors.name && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {validationErrors.name}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" style={{ fontWeight: '600', color: '#555' }}>
                      Email Address <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ced4da',
                      }}
                    />
                    {validationErrors.email && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {validationErrors.email}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" style={{ fontWeight: '600', color: '#555' }}>
                      Phone Number <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ced4da',
                      }}
                    />
                    {validationErrors.phone && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {validationErrors.phone}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="address" style={{ fontWeight: '600', color: '#555' }}>
                      Delivery Address <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <textarea
                      className={`form-control ${validationErrors.address ? 'is-invalid' : ''}`}
                      id="address"
                      name="address"
                      rows="3"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St, City, State, ZIP"
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ced4da',
                      }}
                    />
                    {validationErrors.address && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {validationErrors.address}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      opacity: isLoading ? 0.6 : 1,
                      marginTop: '10px',
                    }}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
                        Loading...
                      </>
                    ) : (
                      <>
                        Continue to Payment
                        <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div>
                  <h6 style={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
                    <i className="fas fa-credit-card" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                    Payment Information
                  </h6>

                  {/* Customer Info Display */}
                  <div style={{
                    background: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    fontSize: '14px',
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      <strong>Name:</strong> {customerInfo.name}
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong>Email:</strong> {customerInfo.email}
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong>Phone:</strong> {customerInfo.phone}
                    </div>
                    <div>
                      <strong>Address:</strong> {customerInfo.address}
                    </div>
                    <button
                      onClick={() => setShowPaymentForm(false)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ff6b35',
                        fontSize: '13px',
                        marginTop: '10px',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      <i className="fas fa-edit" style={{ marginRight: '5px' }}></i>
                      Edit Information
                    </button>
                  </div>

                  {clientSecret && stripePromise ? (
                    <Elements stripe={stripePromise} options={options}>
                      <CheckoutForm
                        customerInfo={customerInfo}
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                        totalAmount={totalAmount}
                      />
                    </Elements>
                  ) : clientSecret && !stripePromise ? (
                    <div className="alert alert-danger">
                      <h6>Stripe Configuration Missing</h6>
                      <p>The payment system is not configured. Please add your Stripe publishable key to the <code>.env.local</code> file.</p>
                      <p style={{ fontSize: '14px', marginTop: '10px' }}>
                        See <a href="/STRIPE_QUICKSTART.md" target="_blank" style={{ color: '#ff6b35' }}>STRIPE_QUICKSTART.md</a> for setup instructions.
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
