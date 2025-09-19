export default function Packages() {
  return (
    <div className="packages-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Event Packages</h1>
            <p>Choose the perfect catering package for your event</p>
          </div>
        </div>
      </section>

      <section className="packages-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Packages</span>
            <h2>Event Catering Packages</h2>
          </div>

          <div className="row packages-row">
            <div className="col-lg-4 col-md-6 package-block">
              <div className="package-card">
                <div className="package-header">
                  <h3>3-Month Plan</h3>
                  <div className="price">$2,999</div>
                  <div className="savings">Save 10%</div>
                </div>
                <div className="package-features">
                  <ul>
                    <li>Weekly BBQ deliveries</li>
                    <li>12 servings per week</li>
                    <li>Choice of 3 meats</li>
                    <li>2 sides included</li>
                    <li>Free setup & cleanup</li>
                  </ul>
                </div>
                <a href="/catering" className="theme-btn">Choose Plan</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 package-block">
              <div className="package-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="package-header">
                  <h3>6-Month Plan</h3>
                  <div className="price">$5,499</div>
                  <div className="savings">Save 15%</div>
                </div>
                <div className="package-features">
                  <ul>
                    <li>Bi-weekly BBQ deliveries</li>
                    <li>24 servings per delivery</li>
                    <li>Choice of 4 meats</li>
                    <li>3 sides included</li>
                    <li>Free setup & cleanup</li>
                    <li>Priority booking</li>
                  </ul>
                </div>
                <a href="/catering" className="theme-btn">Choose Plan</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 package-block">
              <div className="package-card">
                <div className="package-header">
                  <h3>12-Month Plan</h3>
                  <div className="price">$9,999</div>
                  <div className="savings">Save 20%</div>
                </div>
                <div className="package-features">
                  <ul>
                    <li>Monthly BBQ deliveries</li>
                    <li>48 servings per delivery</li>
                    <li>All meats available</li>
                    <li>All sides included</li>
                    <li>Free setup & cleanup</li>
                    <li>VIP customer status</li>
                    <li>Exclusive event invites</li>
                  </ul>
                </div>
                <a href="/catering" className="theme-btn">Choose Plan</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
