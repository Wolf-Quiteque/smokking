'use client';

import { useCart } from '../../lib/CartContext';

export default function SecretMenu() {
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

      <div className="secret-menu-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Secret Menu</h1>
            <p>Exclusive dishes available only at the Ranch Meet-Up</p>
          </div>
        </div>
      </section>

      <section className="secret-menu-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Secret Menu</span>
            <h2>Ranch Meet-Up Specials</h2>
          </div>

          <div className="secret-menu-intro">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <p>Our secret menu features exclusive BBQ creations that are only available during our Ranch Meet-Up events. These limited-time dishes are crafted with premium ingredients and innovative techniques that you won't find anywhere else.</p>
                <p>Join our community and vote for which secret menu items you'd like to see featured at the next meet-up!</p>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="ranch-badge">
                  <i className="flaticon-meat-4"></i>
                  <h3>Ranch Exclusive</h3>
                  <p>Available only at meet-ups</p>
                </div>
              </div>
            </div>
          </div>

          <div className="secret-dishes">
            <h3>Current Secret Menu Items</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-1.jpg" alt="Smoked Trout Dip" />
                  </div>
                  <div className="dish-content">
                    <h4>Smoked Trout Dip</h4>
                    <p>House-smoked trout blended with cream cheese, herbs, and served with artisanal crackers</p>
                    <div className="vote-section">
                      <span className="votes">127 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-2.jpg" alt="Bourbon Glazed Ribs" />
                  </div>
                  <div className="dish-content">
                    <h4>Bourbon Glazed Ribs</h4>
                    <p>St. Louis-style ribs slow-smoked and finished with our signature bourbon glaze</p>
                    <div className="vote-section">
                      <span className="votes">89 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-3.jpg" alt="Elote Stuffed Peppers" />
                  </div>
                  <div className="dish-content">
                    <h4>Elote Stuffed Peppers</h4>
                    <p>Mexican street corn flavors stuffed into sweet peppers and grilled to perfection</p>
                    <div className="vote-section">
                      <span className="votes">156 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-section">
            <div className="signup-card">
              <h3>Want to Vote & Get Exclusive Access?</h3>
              <p>Sign up now to vote for secret menu items and be the first to know about upcoming Ranch Meet-Ups!</p>
              <form className="signup-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Your Email" className="form-control" />
                  </div>
                </div>
                <button type="submit" className="theme-btn">Sign Up & Vote</button>
              </form>
              <p className="disclaimer">By signing up, you'll receive updates about meet-ups and exclusive offers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
