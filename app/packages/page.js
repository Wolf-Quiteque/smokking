export default function Packages() {
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
                      <li className="current"><a href="/packages">Packages</a></li>
                      
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
                  <li className="cart-box"><a href="#"><i className="flaticon-shopping-cart-1"></i><span>0</span></a></li>
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
                      <li className="current"><a href="/packages">Packages</a></li>
                      
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

      {/* page-title */}
      <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title.webp)' }}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Packages</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Packages</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* service-section */}
      <section className="service-section bg-color-1">
        <div className="icon-layer" style={{ backgroundImage: 'url(/images/icons/bg-icon-1.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span>Our Packages</span>
            <h2>Kingz Smoke Ringz BBQ Packages</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-meat-4"></i></div>
                  <h3><a href="#">Lunch Specials</a></h3>
                  <p>Convenient and value-packed lunches featuring top sellers like Baby Back Ribs, Brisket, or Turkey Leg with a side and drink.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-hang"></i></div>
                  <h3><a href="#">Dinners</a></h3>
                  <p>Full-service meals with a main meat and choice of two sides, perfect for a complete dining experience.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-meat-5"></i></div>
                  <h3><a href="#">Meats by the Pound</a></h3>
                  <p>Wide selection of smoked meats including Chicken, Brisket, Hot Links, and various ribs, served by the pound or slab.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-hang"></i></div>
                  <h3><a href="#">Sandwiches</a></h3>
                  <p>Classic and signature sandwiches like Sliced/Chopped Brisket and the Kingz' Sandwich with brisket and sausage.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-meat-4"></i></div>
                  <h3><a href="#">Baked Potatoes</a></h3>
                  <p>Large, generously portioned baked potatoes stuffed with meats, cheese, and toppings - a signature dish.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-2">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-meat-5"></i></div>
                  <h3><a href="#">Sides</a></h3>
                  <p>Southern-style sides including Dirty Rice, Green Beans, Sweet Beans, Pinto Beans, and Potato Salad.</p>
                  <div className="btn-box">
                    <a href="/menu" className="theme-btn">View Menu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}

      {/* news-section */}
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title style-two centred">
            <span>Customer Favorites</span>
            <h2>Popular Package Reviews</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-1.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">Ryan H.</a>,</li>
                      <li>DoorDash Review</li>
                    </ul>
                    <h4><a href="#">Brisket Smash Burger & Loaded Potato</a></h4>
                    <p>"brisket = fire! loaded baked potato = amazing!...the brisket smash burger is the best burger I've had in my life!!"</p>
                    <div className="link"><a href="#">READ MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-2.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">Tanya C.</a>,</li>
                      <li>DoorDash Review</li>
                    </ul>
                    <h4><a href="#">Presentation & Potato Salad</a></h4>
                    <p>"Presentation was on point... portions were bigger than I expected and to bring a unique flavor to a classic dish like potato salad"</p>
                    <div className="link"><a href="#">READ MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '600ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-3.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">T. Terry L.</a>,</li>
                      <li>DoorDash Review</li>
                    </ul>
                    <h4><a href="#">OG Sandwich & Brisket</a></h4>
                    <p>"Sandwich comes with a great amount of brisket and a ton of fries... Brisket smells and tastes great!"</p>
                    <div className="link"><a href="#">READ MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section end */}

    </>
  );
}
