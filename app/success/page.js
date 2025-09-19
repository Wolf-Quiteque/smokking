export default function Success() {
  return (
    <div className="success-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Order Successful!</h1>
            <p>Thank you for your order</p>
          </div>
        </div>
      </section>

      <section className="success-section bg-color-3">
        <div className="auto-container">
          <div className="success-content centred">
            <div className="success-icon">
              <i className="flaticon-success"></i>
            </div>
            <h2>Payment Confirmed</h2>
            <p>Your order has been successfully processed. We'll send you a confirmation email with all the details.</p>

            <div className="order-details">
              <h3>Order #KS2025001</h3>
              <div className="order-info">
                <p><strong>Estimated Delivery:</strong> October 15, 2025 - 6:00 PM</p>
                <p><strong>Delivery Address:</strong> 123 Main Street, Anytown, USA</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
              </div>
            </div>

            <div className="success-actions">
              <a href="/" className="theme-btn">Continue Shopping</a>
              <a href="/menu" className="theme-btn secondary">View Menu</a>
            </div>

            <div className="success-message">
              <p>Questions about your order? Call us at (555) 123-4567 or email orders@kingsmokerings.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
