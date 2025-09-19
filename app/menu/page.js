export default function Menu() {
  return (
    <div className="menu-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Our Menu</h1>
            <p>Discover our full range of BBQ meats, sides, and specials</p>
          </div>
        </div>
      </section>

      <section className="menu-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Menu</span>
            <h2>Full Menu</h2>
          </div>

          <div className="menu-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Meats</button>
            <button className="filter-btn">Sides</button>
            <button className="filter-btn">Specials</button>
          </div>

          <div className="row menu-items">
            {/* Placeholder menu items - will be populated with actual menu data */}
            <div className="col-lg-4 col-md-6 menu-item">
              <div className="menu-block">
                <div className="icon-box"><i className="flaticon-meat-4"></i></div>
                <h3>Brisket</h3>
                <p>Tender smoked brisket, slow-cooked to perfection</p>
                <span className="price">$25.99/lb</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 menu-item">
              <div className="menu-block">
                <div className="icon-box"><i className="flaticon-hang"></i></div>
                <h3>Ribs</h3>
                <p>Fall-off-the-bone baby back ribs with our signature sauce</p>
                <span className="price">$18.99/rack</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 menu-item">
              <div className="menu-block">
                <div className="icon-box"><i className="flaticon-meat-5"></i></div>
                <h3>Pulled Pork</h3>
                <p>Slow-smoked pulled pork with coleslaw</p>
                <span className="price">$14.99/lb</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
