'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    pickupDate: '',
    pickupTime: ''
  });
  const [advanceNoticeError, setAdvanceNoticeError] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('kingzCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
    setLoading(false);
  }, []);

  // Calculate subtotal
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate delivery fee (free over $50, otherwise $5.99)
  const getDeliveryFee = () => {
    const subtotal = getSubtotal();
    return subtotal >= 50 ? 0 : 5.99;
  };

  // Calculate total
  const getTotal = () => {
    return getSubtotal() + getDeliveryFee();
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if order meets advance notice requirements
  const checkAdvanceNotice = () => {
    if (!formData.pickupDate || !formData.pickupTime) {
      return 'Please select a pickup date and time';
    }

    const pickupDateTime = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
    const now = new Date();
    const hoursUntilPickup = (pickupDateTime - now) / (1000 * 60 * 60);

    // Check each item in cart for advance notice requirements
    for (const item of cart) {
      if (item.prepTime && item.prepTime > 0) {
        if (hoursUntilPickup < item.prepTime) {
          return `${item.name} requires ${item.prepTime} hours advance notice. Please select a later pickup time or remove this item from your cart.`;
        }
      }
    }

    // Check if pickup time is in the past
    if (pickupDateTime < now) {
      return 'Pickup time cannot be in the past';
    }

    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    // Check advance notice requirements
    const advanceNoticeCheck = checkAdvanceNotice();
    if (advanceNoticeCheck) {
      setAdvanceNoticeError(advanceNoticeCheck);
      alert(advanceNoticeCheck);
      return;
    }

    setAdvanceNoticeError(null);

    // Here you would integrate with your payment processor (e.g., Stripe)
    // For now, we'll just simulate a successful order
    console.log('Order submitted:', {
      customer: formData,
      cart: cart,
      total: getTotal(),
      pickupTime: `${formData.pickupDate} at ${formData.pickupTime}`
    });

    // Clear the cart
    localStorage.removeItem('kingzCart');

    // Redirect to success page
    router.push('/success');
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <section className="page-title bg-color-1">
          <div className="auto-container">
            <div className="content-box centred">
              <h1>Checkout</h1>
              <p>Complete your order</p>
            </div>
          </div>
        </section>

        <section className="checkout-section bg-color-3" style={{ padding: '100px 0' }}>
          <div className="auto-container">
            <div style={{ textAlign: 'center' }}>
              <h3>Your cart is empty</h3>
              <p>Add some delicious BBQ items to your cart before checking out!</p>
              <a href="/menu" className="theme-btn" style={{ marginTop: '20px' }}>Browse Menu</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Checkout</h1>
            <p>Complete your order</p>
          </div>
        </div>
      </section>

      <section className="checkout-section bg-color-3" style={{ padding: '70px 0' }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="checkout-form" style={{ background: 'white', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
                <h3>Billing Information</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>ZIP Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <h3 style={{ marginTop: '30px' }}>Pickup Information *</h3>
                  {cart.some(item => item.prepTime > 0) && (
                    <div style={{
                      background: '#fff3cd',
                      border: '1px solid #ffc107',
                      color: '#856404',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      marginBottom: '15px',
                      fontSize: '13px'
                    }}>
                      <strong><i className="fas fa-exclamation-triangle" style={{marginRight: '8px'}}></i>Advance Notice Required:</strong>
                      <ul style={{marginBottom: 0, marginTop: '8px', paddingLeft: '20px'}}>
                        {cart.filter(item => item.prepTime > 0).map(item => (
                          <li key={item.id}>{item.name} - {item.prepTime} hours notice</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {advanceNoticeError && (
                    <div style={{
                      background: '#f8d7da',
                      border: '1px solid #f5c6cb',
                      color: '#721c24',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      marginBottom: '15px',
                      fontSize: '13px'
                    }}>
                      <strong><i className="fas fa-times-circle" style={{marginRight: '8px'}}></i>{advanceNoticeError}</strong>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pickup Date *</label>
                        <input
                          type="date"
                          className="form-control"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pickup Time *</label>
                        <input
                          type="time"
                          className="form-control"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <h3 style={{ marginTop: '30px' }}>Payment Information</h3>
                  <div className="payment-methods" style={{ marginBottom: '20px' }}>
                    <div className="payment-method">
                      <input type="radio" name="payment" id="stripe" defaultChecked />
                      <label htmlFor="stripe" style={{ marginLeft: '10px' }}>Credit Card (Stripe)</label>
                    </div>
                  </div>

                  <div className="card-details">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 5678 9012 3456"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="123"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="theme-btn" style={{ marginTop: '20px' }}>Complete Order</button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="order-summary" style={{ background: 'white', padding: '30px', borderRadius: '10px', position: 'sticky', top: '20px' }}>
                <h3>Order Summary</h3>
                <div className="order-items" style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
                  {cart.map(item => (
                    <div key={item.id} className="order-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px', borderRadius: '5px' }} />
                        <div>
                          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</div>
                          <div style={{ fontSize: '12px', color: '#666' }}>Qty: {item.quantity}</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Subtotal:</span>
                    <span>${getSubtotal().toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Delivery Fee:</span>
                    <span>{getDeliveryFee() === 0 ? 'FREE' : `$${getDeliveryFee().toFixed(2)}`}</span>
                  </div>
                  {getSubtotal() < 50 && (
                    <div style={{ fontSize: '12px', color: '#ff6b35', marginTop: '5px' }}>
                      Add ${(50 - getSubtotal()).toFixed(2)} more for free delivery!
                    </div>
                  )}
                </div>

                <div className="order-total" style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total:</span>
                  <span style={{ color: '#ff6b35' }}>${getTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
