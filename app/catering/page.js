export default function Catering() {
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
                      <li><a href="/packages">Packages</a></li>
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
                      <li className="current"><a href="/catering">Catering</a></li>
                      <li><a href="/packages">Packages</a></li>
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
                <div id="video_block_1">
                  <div className="video-inner" style={{ backgroundImage: 'url(/images/resource/about-1.jpg)' }}>
                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image video-btn" data-caption=""><i className="fas fa-play"></i></a>
                  </div>
                </div>
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
                  <div className="icon-box"><i className="flaticon-meat-4"></i></div>
                  <h3><a href="#">Corporate Events</a></h3>
                  <p>Tailored catering for business meetings, conferences, and team building events.</p>
                  <div className="btn-box">
                    <a href="#" className="theme-btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-hang"></i></div>
                  <h3><a href="#">Private Parties</a></h3>
                  <p>Intimate gatherings, birthdays, anniversaries, and family celebrations.</p>
                  <div className="btn-box">
                    <a href="#" className="theme-btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-meat-5"></i></div>
                  <h3><a href="#">Special Occasions</a></h3>
                  <p>Weddings, holiday parties, and any event that deserves exceptional BBQ.</p>
                  <div className="btn-box">
                    <a href="#" className="theme-btn">Learn More</a>
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
      <section className="contact-section centred" id="booking">
        <div className="auto-container">
          <div className="sec-title">
            <span>Book Your Event</span>
            <h2>Get In Touch</h2>
          </div>
          <div className="form-inner">
            <form method="post" action="#" id="contact-form" className="default-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-user"></i>
                    <input type="text" name="username" placeholder="Name" required="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-envelope"></i>
                    <input type="email" name="email" placeholder="Email" required="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="fas fa-phone-volume"></i>
                    <input type="text" name="phone" required="" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-calendar"></i>
                    <input type="date" name="event_date" required="" placeholder="Event Date" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-users"></i>
                    <input type="number" name="guests" required="" placeholder="Estimated Guest Count" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-building"></i>
                    <select name="event_type" required="">
                      <option value="">Event Type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-comment-alt"></i>
                    <textarea name="message" placeholder="Special Requests or Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button className="theme-btn" type="submit" name="submit-form">
                    SEND INQUIRY
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact-section end */}

      {/* testimonial-section */}
      <section className="testimonial-section alternate-2 bg-color-1">
        <div className="icon-layer" style={{ backgroundImage: 'url(/images/icons/bg-icon-1.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title style-two">
            <span>Testimonials</span>
            <h2>Why People Believe in Us!</h2>
          </div>
          <div className="two-column-carousel owl-carousel owl-theme owl-dots-none">
            <div className="testimonial-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-quote"></i></div>
                <p>"Chef Glenn's barbecue was a hit at our corporate event. The presentation was exquisite, and the unique flavors were truly the highlight of the evening."</p>
                <div className="author-box">
                  <figure className="image-box"><img src="/images/resource/testimonial-1.png" alt="" /></figure>
                  <h5>Corporate Client</h5>
                  <span className="designation">Event Organizer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-quote"></i></div>
                <p>"Presentation was on point... portions were bigger than I expected and to bring a unique flavor to a classic dish like potato salad and knock it out the park?"</p>
                <div className="author-box">
                  <figure className="image-box"><img src="/images/resource/testimonial-2.png" alt="" /></figure>
                  <h5>Tanya C.</h5>
                  <span className="designation">Food Lover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-section end */}
    </>
  );
}
