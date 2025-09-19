export default function Failed() {
  return (
    <div className="failed-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Payment Failed</h1>
            <p>There was an issue processing your payment</p>
          </div>
        </div>
      </section>

      <section className="failed-section bg-color-3">
        <div className="auto-container">
          <div className="failed-content centred">
            <div className="failed-icon">
              <i className="flaticon-error"></i>
            </div>
            <h2>Payment Unsuccessful</h2>
            <p>We're sorry, but your payment could not be processed at this time. Please try again or contact us for assistance.</p>

            <div className="error-details">
              <h3>What might have caused this?</h3>
              <ul>
                <li>Insufficient funds in your account</li>
                <li>Incorrect card information</li>
                <li>Card expired or blocked</li>
                <li>Network connectivity issues</li>
              </ul>
            </div>

            <div className="failed-actions">
              <a href="/checkout" className="theme-btn">Try Again</a>
              <a href="/" className="theme-btn secondary">Return Home</a>
            </div>

            <div className="support-message">
              <p>Need help? Our support team is here for you.</p>
              <p>Call us at (555) 123-4567 or email support@kingsmokerings.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
