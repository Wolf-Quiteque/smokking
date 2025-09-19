export default function Catering() {
  return (
    <div className="catering-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Catering Orders</h1>
            <p>Let us handle the food for your next event</p>
          </div>
        </div>
      </section>

      <section className="catering-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Catering</span>
            <h2>Order Catering</h2>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <form className="catering-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Event Type</label>
                      <select className="form-control">
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Birthday Party</option>
                        <option>Family Gathering</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Number of Guests</label>
                      <input type="number" className="form-control" placeholder="50" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Event Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Event Time</label>
                      <input type="time" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Event Location</label>
                  <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea className="form-control" rows="4" placeholder="Any dietary restrictions or special requests..."></textarea>
                </div>

                <button type="submit" className="theme-btn">Get Quote</button>
              </form>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="catering-info">
                <h3>Why Choose Us?</h3>
                <ul>
                  <li><i className="flaticon-meat-4"></i> Premium Quality Meats</li>
                  <li><i className="flaticon-free-delivery"></i> Free Delivery</li>
                  <li><i className="flaticon-call-center-agent"></i> Professional Service</li>
                  <li><i className="flaticon-winner"></i> Competitive Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
