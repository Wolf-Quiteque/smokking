'use client';

import { useCart } from '../../lib/CartContext';

export default function Terms() {
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

                      <li><a href="/promotions">Promotions</a></li>
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

                      <li><a href="/promotions">Promotions</a></li>
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

      <div className="terms-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Terms of Service</h1>
            <p>Please read our terms carefully</p>
          </div>
        </div>
      </section>

      <section className="terms-section bg-color-3">
        <div className="auto-container">
          <div className="terms-content">
            <h2>Terms of Service for King Smoke Ringz</h2>
            <p><em>Last updated: October 1, 2025</em></p>

            <h3>Acceptance of Terms</h3>
            <p>By accessing and using King Smoke Ringz, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h3>Use License</h3>
            <p>Permission is granted to temporarily use King Smoke Ringz for personal, non-commercial transitory viewing only.</p>

            <h3>Disclaimer</h3>
            <p>The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, King Smoke Ringz excludes all representations and warranties.</p>

            <h3>Limitations</h3>
            <p>In no event shall King Smoke Ringz be liable for any damages arising out of the use or inability to use our services.</p>

            <h3>Contact Information</h3>
            <p>If you have any questions about these Terms of Service, please contact us at legal@kingsmokerings.com</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
