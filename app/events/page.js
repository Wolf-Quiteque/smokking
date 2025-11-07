'use client';

import { useCart } from '../../lib/CartContext';

export default function Events() {
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
                      <li className="current"><a href="/events">Events</a></li>
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
                      <li className="current"><a href="/events">Events</a></li>
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
              <h1>Events</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Events</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* gallery-section */}
      <section className="gallery-section" style={{padding: '80px 0', backgroundColor: '#f8f9fa'}}>
        <div className="auto-container">
          <div className="sec-title style-two centred" style={{marginBottom: '50px'}}>
            <span>Our Gallery</span>
            <h2>Kingz Smoke Ringz Moments</h2>
          </div>
          <div className="masonry-gallery" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '15px',
            gridAutoRows: '200px'
          }}>
            <div className="gallery-item" style={{
              gridRow: 'span 2',
              backgroundImage: 'url(/images/resource/portfolio-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              backgroundImage: 'url(/images/resource/portfolio-2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              gridRow: 'span 2',
              backgroundImage: 'url(/images/resource/portfolio-3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              backgroundImage: 'url(/images/news/news-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              backgroundImage: 'url(/images/news/news-2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              backgroundImage: 'url(/images/news/news-3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              gridRow: 'span 2',
              backgroundImage: 'url(/images/resource/shop/shop-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
            <div className="gallery-item" style={{
              backgroundImage: 'url(/images/resource/shop/shop-2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                <i className="fas fa-search-plus" style={{color: 'white', fontSize: '24px'}}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery-section end */}

      {/* news-section */}
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title style-two centred">
            <span>Upcoming Events</span>
            <h2>Kingz Smoke Ringz Events</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-1.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">BBQ Festival Downtown</a>,</li>
                      <li>October 15, 2025</li>
                    </ul>
                    <h4><a href="#">Annual BBQ Festival</a></h4>
                    <p>Join us at the annual BBQ Festival! We'll be serving our signature brisket and ribs, plus showcasing our secret menu items at Downtown Plaza.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
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
                      <li><a href="#">Ranch Meet-Up</a>,</li>
                      <li>November 2, 2025</li>
                    </ul>
                    <h4><a href="#">Exclusive Ranch Experience</a></h4>
                    <p>Our exclusive Ranch Meet-Up featuring secret menu items, live music, and BBQ competitions. Members only - sign up required.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
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
                      <li><a href="#">Thanksgiving Catering</a>,</li>
                      <li>November 20, 2025</li>
                    </ul>
                    <h4><a href="#">Community Thanksgiving Dinner</a></h4>
                    <p>Catering the annual community Thanksgiving dinner with traditional turkey and all the fixings, plus our famous BBQ sides.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-4.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">Winter BBQ Bash</a>,</li>
                      <li>December 10, 2025</li>
                    </ul>
                    <h4><a href="#">Indoor Winter BBQ Event</a></h4>
                    <p>Beat the winter blues with our indoor BBQ event! Heated pavilion, craft beers, and comfort food favorites at the Sports Complex.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-5.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">Christmas Market</a>,</li>
                      <li>December 15, 2025</li>
                    </ul>
                    <h4><a href="#">Holiday BBQ Market</a></h4>
                    <p>Join us at the Christmas Market for holiday-themed BBQ specials, gift packages, and festive atmosphere with holiday music.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated animated animated" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDelay: '600ms', animationName: 'fadeInUp'}}>
                <div className="inner-box">
                  <figure className="image-box"><a href="#"><img src="/images/news/news-6.jpg" alt="" /></a></figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li><a href="#">New Year's Eve</a>,</li>
                      <li>December 31, 2025</li>
                    </ul>
                    <h4><a href="#">NYE BBQ Celebration</a></h4>
                    <p>Ring in the New Year with our special BBQ countdown dinner, champagne toasts, and midnight BBQ snacks at the Grand Ballroom.</p>
                    <div className="link"><a href="#">LEARN MORE<i className="flaticon-right"></i></a></div>
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
