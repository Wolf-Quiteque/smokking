'use client';

import { useCart } from '../../lib/CartContext';

export default function Catering() {
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
                      <li className="current"><a href="/catering">Catering</a></li>
                      
                      
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
                      <li className="current"><a href="/catering">Catering</a></li>
                      
                      
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
              <h1>Catering</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Catering</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* about-section */}
      <section className="about-section sec-pad">
        <div className="auto-container">
          <div className="inner-container mr-0 clearfix">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 video-column">
            <img className="img-fluid" src="/images/catering/king.jpeg" />
                </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                <div id="content_block_1">
                  <div className="content-box">
                    <div className="sec-title">
                      <span>Catering Services</span>
                      <h2>Gourmet Catering & Corporate Events</h2>
                    </div>
                    <div className="text">
                      <p>Elevating Your Event with Curated Barbecue Cuisine. We offer a tailored, upscale catering experience, not just food. Our gourmet samples served in martini glasses provide a sophisticated presentation. Perfect for corporate events, private parties, and special occasions.</p>
                    </div>
                    <ul className="list clearfix">
                      <li>Curated Experience</li>
                      <li>Gourmet Samples in Martini Glasses</li>
                    </ul>
                    <div className="btn-box">
                      <a href="#booking" className="theme-btn">Book Now<i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}

      {/* service-section */}
      <section className="service-section bg-color-1">
        <div className="icon-layer" style={{ backgroundImage: 'url(/images/icons/bg-icon-1.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span>What we do</span>
            <h2>Our Catering Services</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-call-center-agent"></i></div>
                  <h3><a href="#">Corporate Events</a></h3>
                  <p>Tailored catering for business meetings, conferences  events.</p>
                  <div className="btn-box">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-winner"></i></div>
                  <h3><a href="#">Private Parties</a></h3>
                  <p>Intimate gatherings, birthdays, anniversaries, and family celebrations.</p>
                  <div className="btn-box">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-flag"></i></div>
                  <h3><a href="#">Special Occasions</a></h3>
                  <p>Weddings, holiday parties, and any event that deserves exceptional BBQ.</p>
                  <div className="btn-box">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}

      {/* shop-style-two */}
      <section className="shop-style-two">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Our Menu</span>
            <h2>Catering Selections</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div className="shop-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/images/resource/shop/shop-5.jpg" alt="" />
                    <ul className="list clearfix">
                      <li><a href="#"><i className="flaticon-cart"></i></a></li>
                      <li><a href="#">Sample</a></li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#">Mini Brisket Sliders with Artisanal Slaw</a></h6>
                      <span className="price">Gourmet Starter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div className="shop-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/images/resource/shop/shop-6.jpg" alt="" />
                    <ul className="list clearfix">
                      <li><a href="#"><i className="flaticon-cart"></i></a></li>
                      <li><a href="#">Sample</a></li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#">Pulled Pork Tostada Bites with Cilantro-Lime Crema</a></h6>
                      <span className="price">Gourmet Starter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div className="shop-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/images/resource/shop/shop-7.jpg" alt="" />
                    <ul className="list clearfix">
                      <li><a href="#"><i className="flaticon-cart"></i></a></li>
                      <li><a href="#">Sample</a></li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#">Smoked Brisket & Gruyère Mac 'n' Cheese Martini</a></h6>
                      <span className="price">Gourmet Sample</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div className="shop-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/images/resource/shop/shop-10.jpg" alt="" />
                    <ul className="list clearfix">
                      <li><a href="#"><i className="flaticon-cart"></i></a></li>
                      <li><a href="#">Sample</a></li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#">Bourbon-Glazed Pork Belly with Pickled Onion</a></h6>
                      <span className="price">Gourmet Sample</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop-style-two end */}

      {/* contact-section */}
      <section className="contact-section centred" id="booking" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '80px 0', position: 'relative' }}>
        <div className="auto-container">
          <div className="sec-title" style={{ marginBottom: '50px' }}>
            <span style={{ color: '#d9534f', fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Reserve Your Experience</span>
            <h2 style={{ color: '#2c3e50', fontSize: '48px', fontWeight: '700', marginTop: '10px', marginBottom: '20px' }}>Book Your Catering Event</h2>
            <p style={{ color: '#6c757d', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Let us make your special occasion unforgettable with our premium barbecue catering services</p>
          </div>
          <div className="form-inner" style={{ background: 'white', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="name" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your full name" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="email" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="your@email.com" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="phone" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="eventDate" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Event Date</label>
                    <input type="date" className="form-control" id="eventDate" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="guests" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Estimated Guests</label>
                    <input type="number" className="form-control" id="guests" placeholder="50" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="eventType" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Event Type</label>
                    <select className="form-control" id="eventType" style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease' }}>
                      <option value="">Select Event Type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="form-group">
                    <label htmlFor="message" style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Special Requests</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Any dietary restrictions, special requests, or additional details..." style={{ borderRadius: '12px', padding: '15px', border: '2px solid #e9ecef', fontSize: '16px', transition: 'all 0.3s ease', resize: 'vertical' }}></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ marginTop: '30px' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #d9534f 0%, #c9302c 100%)', border: 'none', borderRadius: '30px', padding: '15px 40px', fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 8px 25px rgba(217, 83, 79, 0.3)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                  <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact-section end */}


    </>
  );
}
