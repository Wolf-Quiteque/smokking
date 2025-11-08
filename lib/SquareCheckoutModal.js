'use client';

import { useState, useEffect } from 'react';

export default function SquareCheckoutModal({ isOpen, onClose, cart, totalAmount, onPaymentSuccess }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [paymentError, setPaymentError] = useState('');
  const [card, setCard] = useState(null);
  const [payments, setPayments] = useState(null);
  const [squareConfig, setSquareConfig] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setShowPaymentForm(false);
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
      setValidationErrors({});
      setPaymentError('');
      setCard(null);
    }
  }, [isOpen]);

  // Fetch Square configuration from server when modal opens
  useEffect(() => {
    if (isOpen && !squareConfig) {
      fetchSquareConfig();
    }
  }, [isOpen]);

  // Initialize Square Web Payments SDK when showing payment form
  useEffect(() => {
    if (showPaymentForm && !card && typeof window !== 'undefined' && squareConfig) {
      initializeSquarePayments();
    }
  }, [showPaymentForm, squareConfig]);

  const fetchSquareConfig = async () => {
    try {
      const response = await fetch('/api/square/config');
      const data = await response.json();

      if (data.success) {
        setSquareConfig(data);
      } else {
        console.error('Failed to load Square config:', data.error);
        setPaymentError(data.error || 'Failed to load payment system configuration');
      }
    } catch (error) {
      console.error('Error fetching Square config:', error);
      setPaymentError('Failed to connect to payment system');
    }
  };

  const initializeSquarePayments = async () => {
    // Check if Square SDK is loaded
    if (!window.Square) {
      console.error('Square.js failed to load properly');
      setPaymentError('Payment system failed to load. Please refresh the page.');
      return;
    }

    // Check if config is available
    if (!squareConfig || !squareConfig.applicationId || !squareConfig.locationId) {
      console.error('Square configuration not available');
      setPaymentError('Payment system is not configured. Please contact support.');
      return;
    }

    try {
      const paymentsInstance = window.Square.payments(
        squareConfig.applicationId,
        squareConfig.locationId
      );
      setPayments(paymentsInstance);

      const cardInstance = await paymentsInstance.card();
      await cardInstance.attach('#card-container');
      setCard(cardInstance);
    } catch (error) {
      console.error('Failed to initialize Square payments:', error);
      setPaymentError(`Failed to initialize payment form: ${error.message || 'Please try again.'}`);
    }
  };

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
    setShowPaymentForm(true);
    setIsLoading(false);
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

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!card) {
      setPaymentError('Payment form not initialized. Please refresh and try again.');
      return;
    }

    setIsProcessingPayment(true);
    setPaymentError('');

    try {
      // Tokenize card information
      const result = await card.tokenize();

      if (result.status === 'OK') {
        // Send payment to your backend
        const response = await fetch('/api/square/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sourceId: result.token,
            amount: totalAmount,
            customerInfo,
            cartItems: cart,
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Payment successful
          onPaymentSuccess(data.payment);
          onClose();
        } else {
          setPaymentError(data.error || 'Payment failed. Please try again.');
        }
      } else {
        // Tokenization failed
        let errorMessage = 'Card information is invalid.';
        if (result.errors) {
          errorMessage = result.errors.map(error => error.message).join(', ');
        }
        setPaymentError(errorMessage);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentError('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  if (!isOpen) return null;

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

                  {/* Square Card Payment Form */}
                  <form onSubmit={handlePayment}>
                    {paymentError ? (
                      <div className="alert alert-danger" style={{
                        marginBottom: '20px',
                        padding: '15px',
                        borderRadius: '8px',
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        color: '#721c24'
                      }}>
                        <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                        <strong>{paymentError}</strong>
                      </div>
                    ) : null}

                    <div
                      id="card-container"
                      style={{
                        minHeight: '100px',
                        marginBottom: '20px',
                      }}
                    />

                    <button
                      type="submit"
                      disabled={isProcessingPayment || !card}
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
                        cursor: isProcessingPayment || !card ? 'not-allowed' : 'pointer',
                        opacity: isProcessingPayment || !card ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                      }}
                    >
                      {isProcessingPayment ? (
                        <>
                          <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
                          Processing Payment...
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
                      Secure payment powered by Square
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
