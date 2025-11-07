'use client';

import { useCart } from '../../lib/CartContext';

export default function Promotions() {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <>
      {/* main header */}
      <header className="main-header">
        <div className="header-top">
          <div className="auto-container">
            <div className="top-info">
              <ul className="info-list clearfix">
                <li>
                  <i className="flaticon-location-pin"></i>
                  12423 Hamill Path Drive, Birmingham, AL 35211
                </li>
                <li>
                  <i className="flaticon-envelope"></i>
                  <a href="mailto:info@kingzsmokeringzbbq.com">info@kingzsmokeringzbbq.com</a>
                </li>
                <li className="phone">
                  <i className="flaticon-dial"></i>
                  <a href="tel:8602729738">860 -272 -9738</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="logo-box">
                <figure className="logo"><a href="/"><img src="/images/logo_new.webp" alt="" /></a></figure>
              </div>
              <div className="menu-area pull-right">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li><a href="/">Home</a></li>
                      <li><a href="/menu">Menu</a></li>
                      <li><a href="/catering">Catering</a></li>

                      <li className="current"><a href="/promotions">Promotions</a></li>
                      <li><a href="/events">Events</a></li>
                    </ul>
                  </div>
                </nav>
                <ul className="menu-right-content pull-left clearfix">
                  <li className="user-box"><a href="#"><i className="flaticon-user-symbol-of-thin-outline"></i></a></li>
                  <li className="search-box-outer">
                    <div className="dropdown">
                      <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-search"></span></button>
                      <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                        <li className="panel-outer">
                          <div className="form-container">
                            <form method="post" action="#">
                              <div className="form-group">
                                <input type="search" name="field-name" value="" placeholder="Search...." required="" />
                                <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="cart-box">
                    <a href="#" className='nav-toggler navSidebar-button' >
                      <i className="flaticon-shopping-cart-1"></i>
                      <span>{getTotalItems()}</span>
                    </a>
                  </li>
                  <li className="nav-box">
                    <div className="nav-btn nav-toggler navSidebar-button clearfix">
                      <i className="flaticon-list"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <figure className="logo-box pull-left"><a href="/"><img src="/images/logo_new.webp" alt="" /></a></figure>
              <div className="menu-area pull-right">
                <nav className="main-menu clearfix" style={{marginTop: '15px'}}>
                  {/*Keep This Empty / Menu will come through Javascript*/}
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li><a href="/">Home</a></li>
                      <li><a href="/menu">Menu</a></li>
                      <li><a href="/catering">Catering</a></li>

                      <li className="current"><a href="/promotions">Promotions</a></li>
                      <li><a href="/events">Events</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}

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
    </>
  );
}
