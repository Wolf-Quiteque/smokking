export default function Promotions() {
  return (
    <div className="promotions-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Special Promotions</h1>
            <p>Don't miss out on our limited-time offers</p>
          </div>
        </div>
      </section>

      <section className="promotions-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Promotions</span>
            <h2>Current Specials</h2>
          </div>

          <div className="row promotions-row">
            <div className="col-lg-6 col-md-12 promotion-block">
              <div className="promotion-card">
                <div className="promotion-image">
                  <img src="/images/resource/about-1.jpg" alt="Fight Night Spread" />
                  <div className="promotion-badge">Hot Deal</div>
                </div>
                <div className="promotion-content">
                  <h3>Fight Night Spread</h3>
                  <p>Perfect for game day gatherings with friends and family</p>

                  <div className="pricing-options">
                    <div className="option">
                      <h4>Small (10-15 people)</h4>
                      <p>2 lbs brisket, 1 rack ribs, sides for 15</p>
                      <span className="price">$149.99</span>
                    </div>
                    <div className="option">
                      <h4>Medium (20-25 people)</h4>
                      <p>3 lbs brisket, 2 racks ribs, sides for 25</p>
                      <span className="price">$249.99</span>
                    </div>
                    <div className="option">
                      <h4>Large (30-35 people)</h4>
                      <p>5 lbs brisket, 3 racks ribs, sides for 35</p>
                      <span className="price">$349.99</span>
                    </div>
                  </div>

                  <a href="/promotions/fight-night" className="theme-btn">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 promotion-block">
              <div className="promotion-card">
                <div className="promotion-image">
                  <img src="/images/resource/about-2.jpg" alt="BBQ Football Watch Party" />
                  <div className="promotion-badge">Seasonal</div>
                </div>
                <div className="promotion-content">
                  <h3>BBQ Football Watch Party Package</h3>
                  <p>Everything you need for the ultimate game day experience</p>

                  <div className="pricing-options">
                    <div className="option">
                      <h4>Small (10-15 people)</h4>
                      <p>Mixed meats platter, wings, nachos, beer</p>
                      <span className="price">$199.99</span>
                    </div>
                    <div className="option">
                      <h4>Medium (20-25 people)</h4>
                      <p>Large mixed meats, wings, loaded fries, beer</p>
                      <span className="price">$299.99</span>
                    </div>
                    <div className="option">
                      <h4>Large (30-35 people)</h4>
                      <p>Premium meats selection, appetizers, desserts, beer</p>
                      <span className="price">$449.99</span>
                    </div>
                  </div>

                  <a href="/promotions/football-watch-party" className="theme-btn">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
