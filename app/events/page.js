export default function Events() {
  return (
    <div className="events-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Upcoming Events</h1>
            <p>Join King Smoke Ringz at these exciting events</p>
          </div>
        </div>
      </section>

      <section className="events-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Events</span>
            <h2>King Smoke Ringz Events</h2>
          </div>

          <div className="events-calendar">
            <div className="row">
              <div className="col-lg-6 col-md-12 event-card">
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">OCT</span>
                    <span className="day">15</span>
                  </div>
                  <div className="event-content">
                    <h3>BBQ Festival Downtown</h3>
                    <p className="event-location"><i className="flaticon-maps-and-flags"></i> Downtown Plaza, Main Street</p>
                    <p className="event-time"><i className="flaticon-clock"></i> 11:00 AM - 8:00 PM</p>
                    <p className="event-description">Join us at the annual BBQ Festival! We'll be serving our signature brisket and ribs, plus showcasing our secret menu items.</p>
                    <div className="event-details">
                      <span className="category">Food Festival</span>
                      <span className="attendees">Expected: 500+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 event-card">
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">NOV</span>
                    <span className="day">02</span>
                  </div>
                  <div className="event-content">
                    <h3>Ranch Meet-Up</h3>
                    <p className="event-location"><i className="flaticon-maps-and-flags"></i> King Smoke Ranch, Rural Route 45</p>
                    <p className="event-time"><i className="flaticon-clock"></i> 4:00 PM - 10:00 PM</p>
                    <p className="event-description">Our exclusive Ranch Meet-Up featuring secret menu items, live music, and BBQ competitions. Members only - sign up required.</p>
                    <div className="event-details">
                      <span className="category">Private Event</span>
                      <span className="attendees">Limited: 100</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 event-card">
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">NOV</span>
                    <span className="day">20</span>
                  </div>
                  <div className="event-content">
                    <h3>Thanksgiving Catering</h3>
                    <p className="event-location"><i className="flaticon-maps-and-flags"></i> Community Center, Oak Avenue</p>
                    <p className="event-time"><i className="flaticon-clock"></i> 12:00 PM - 6:00 PM</p>
                    <p className="event-description">Catering the annual community Thanksgiving dinner. Traditional turkey and all the fixings, plus our famous BBQ sides.</p>
                    <div className="event-details">
                      <span className="category">Community Event</span>
                      <span className="attendees">Expected: 200</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 event-card">
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">DEC</span>
                    <span className="day">10</span>
                  </div>
                  <div className="event-content">
                    <h3>Winter BBQ Bash</h3>
                    <p className="event-location"><i className="flaticon-maps-and-flags"></i> Indoor Pavilion, Sports Complex</p>
                    <p className="event-time"><i className="flaticon-clock"></i> 6:00 PM - 11:00 PM</p>
                    <p className="event-description">Beat the winter blues with our indoor BBQ event! Heated pavilion, craft beers, and comfort food favorites.</p>
                    <div className="event-details">
                      <span className="category">Seasonal Event</span>
                      <span className="attendees">Expected: 150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="events-cta">
            <div className="cta-content">
              <h3>Want King Smoke Ringz at Your Event?</h3>
              <p>We cater weddings, corporate events, parties, and more. Let's make your event unforgettable!</p>
              <a href="/catering" className="theme-btn">Book Catering</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
