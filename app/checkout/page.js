export default function Checkout() {
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

      <section className="checkout-section bg-color-3">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="checkout-form">
                <h3>Billing Information</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Street address" />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>ZIP Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <h3>Payment Information</h3>
                  <div className="payment-methods">
                    <div className="payment-method">
                      <input type="radio" name="payment" id="stripe" defaultChecked />
                      <label htmlFor="stripe">Credit Card (Stripe)</label>
                    </div>
                  </div>

                  <div className="card-details">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>CVV</label>
                          <input type="text" className="form-control" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="theme-btn">Complete Order</button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="order-items">
                  <div className="order-item">
                    <span>Brisket (2 lbs)</span>
                    <span>$49.98</span>
                  </div>
                  <div className="order-item">
                    <span>Ribs (1 rack)</span>
                    <span>$24.99</span>
                  </div>
                  <div className="order-item">
                    <span>Delivery Fee</span>
                    <span>$5.99</span>
                  </div>
                </div>
                <div className="order-total">
                  <strong>Total: $80.96</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
