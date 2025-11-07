'use client';

import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
   <>
   
    {/* main-slider */}
    <section className="main-slider style-two">
        <div className="main-slider-carousel owl-theme owl-carousel owl-dots-none">
            <div className="slide-item">
                <div className="image-layer" style={{ backgroundImage: 'url(/images/banner/banner-4.webp)' }}></div>
                <div className="auto-container">
                    <div className="content-box centred">
                        <h1>Kingz Smoke Ringz BBQ</h1>
                        <p>Slow-smoked perfection with Alabama-Texas style BBQ mastery</p>
                        <div className="btn-box">
                            <a href="menu" className="theme-btn">Order Now<i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-item">
                <div className="image-layer" style={{ backgroundImage: 'url(/images/banner/banner-5.webp)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Premium Brisket & Ribs</h1>
                        <p>Fire-smoked meats that melt in your mouth - the best burger you'll ever have</p>
                        <div className="btn-box">
                            <a href="menu" className="theme-btn">View Menu<i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-item">
                <div className="image-layer" style={{ backgroundImage: 'url(/images/banner/banner-6.webp)' }}></div>
                <div className="auto-container">
                    <div className="content-box centred">
                        <h1>Gourmet Catering & Retail</h1>
                        <p>Corporate events and BBQ supplies - serving your community since 2014</p>
                        <div className="btn-box">
                            <a href="catering" className="theme-btn">Book Catering<i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* main-slider end */}

    {/* feature-section */}
    <section className="feature-section bg-color-3">
        <div className="auto-container">
            <div className="inner-container clearfix wow slideInLeft animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="single-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-meat-4"></i></div>
                        <h3>Kingz Smoke Ringz BBQ</h3>
                        <p>Food Service at 12423 Hamill Path Drive - Extensive menu, online ordering for pickup</p>
                    </div>
                </div>
                <div className="single-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-hang"></i></div>
                        <h3>Kingz Smoke Ringz BBQ Gourmet/Corporate</h3>
                        <p>Catering Service - Event-based - Curated by Chef Glenn R. Paxton; serves upscale samples in martini glasses</p>
                    </div>
                </div>
                <div className="single-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-meat-5"></i></div>
                        <h3>Kingz Smoke Ringz BBQ Supply</h3>
                        <p>Retail E-commerce at 235 Jungermann Road - Sells branded and third-party rubs and sauces</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* feature-section end */}

    {/* about-style-two */}
    <section className="about-style-two alternate-2 bg-color-3">
        <div className="auto-container">
            <div className="row align-items-center clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_1">
                    <div className="video-box">
                        <video autoPlay loop muted playsInline className="img-fluid" poster="https://res.cloudinary.com/dtfx1jpkq/video/upload/so_0,q_50/about_jukerl.jpg">
                            <source src="https://res.cloudinary.com/dtfx1jpkq/video/upload/v1758267929/about_jukerl.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_2">
                        <div className="content-box light">
                            <div className="sec-title light style-two">
                                <span>About Us</span>
                                <h2>Our Pitmaster's Journey</h2>
                            </div>
                            <div className="text">
                                <p>Kingz Smoke Ringz BBQ was born in 2014 when our founder returned from military service and saw a gap in the local BBQ scene. Drawing from his Alabama roots where barbecue was a family tradition, he embarked on a journey of mastery - taking classes, studying YouTube tutorials, and visiting legendary spots like Franklin's BBQ and Terry Black's to perfect his craft.</p>
                                <p>Today, Chef Glenn R. Paxton brings this expertise to every dish, creating our signature Alabama-Texas style BBQ that has become a community favorite. From humble beginnings to gourmet catering, our story is one of perseverance, passion, and perfecting the art of slow-smoked perfection.</p>
                            </div>
                            <ul className="list clearfix">
                                <li>
                                    <i className="flaticon-call-center-agent"></i>
                                    Master Pitmaster
                                </li>
                                <li>
                                    <i className="flaticon-free-delivery"></i>
                                    Alabama-Texas Style
                                </li>
                                <li>
                                    <i className="flaticon-return-of-investment"></i>
                                    Gourmet Catering
                                </li>
                                <li>
                                    <i className="flaticon-winner"></i>
                                    Community Favorite
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* about-style-two end */}

    {/* service-style-two */}
    <section className="about-style-two bg-color-6">
        <div className="auto-container">
            <div className="row align-items-center clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_2">
                        <div className="content-box">
                            <div className="sec-title style-two">
                                <span>Catering Services</span>
                                <h2>Gourmet Catering & Corporate Events</h2>
                            </div>
                            <div className="text">
                                <p>Elevating Your Event with Curated Barbecue Cuisine. We offer a tailored, upscale catering experience, not just food. Our gourmet samples served in martini glasses provide a sophisticated presentation. Perfect for corporate events, private parties, and special occasions.</p>
                            </div>
                            <ul className="list clearfix">
                                <li>
                                    <i className="flaticon-call-center-agent"></i>
                                    Curated Experience
                                </li>
                                <li>
                                    <i className="flaticon-free-delivery"></i>
                                    Gourmet Samples
                                </li>
                                <li>
                                    <i className="flaticon-return-of-investment"></i>
                                    Corporate Events
                                </li>
                                <li>
                                    <i className="flaticon-winner"></i>
                                    Private Parties
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_1">
                        <div className="image-box">
                            <figure  style={{marginTop: '30px'}} className="image image-1"><img src="/images/resource/catering.webp" alt="" /></figure>
                       <div className="more-btn centred" style={{marginTop: '60px'}}>
                <button onClick={() => setModalOpen(true)} className="theme-btn">Book Now</button>
            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* service-style-two end */}

    {/* shop-style-two */}
    <section className="shop-style-two bg-color-3">
        <div className="auto-container">
            <div className="sec-title light text-center">
                <span>Order Now</span>
                <h2>Featured Menu Items</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                    <div className="shop-block-two wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/images/resource/shop/shop-5.jpg" alt="" />
                                <ul className="list clearfix">
                                    <li><a href="menu"><i className="flaticon-cart"></i></a></li>
                                    <li><a href="menu">order now</a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <div className="inner">
                                    <h6><a href="menu">Premium Brisket</a></h6>
                                    <span className="price">$ 35.00/lb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                    <div className="shop-block-two wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/images/resource/shop/shop-6.jpg" alt="" />
                                <ul className="list clearfix">
                                    <li><a href="menu"><i className="flaticon-cart"></i></a></li>
                                    <li><a href="menu">order now</a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <div className="inner">
                                    <h6><a href="menu">Baby Back Ribs</a></h6>
                                    <span className="price">$ 42.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                    <div className="shop-block-two wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/images/resource/shop/shop-7.jpg" alt="" />
                                <ul className="list clearfix">
                                    <li><a href="menu"><i className="flaticon-cart"></i></a></li>
                                    <li><a href="menu">order now</a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <div className="inner">
                                    <h6><a href="menu">Loaded Baked Potato</a></h6>
                                    <span className="price">$ 25.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                    <div className="shop-block-two wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/images/resource/shop/shop-8.jpg" alt="" />
                                <ul className="list clearfix">
                                    <li><a href="menu"><i className="flaticon-cart"></i></a></li>
                                    <li><a href="menu">order now</a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <div className="inner">
                                    <h6><a href="menu">Kingz Special Dinner</a></h6>
                                    <span className="price">$ 30.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-btn centred">
                <a href="menu" className="theme-btn">See full menu</a>
            </div>
        </div>
    </section>
    {/* shop-style-two end */}

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
                        <p>"Brisket = fire! Loaded baked potato = amazing! The brisket smash burger is the best burger I've had in my life!"</p>
                        <div className="author-box">
                            <figure className="image-box"><img src="/images/resource/testimonial-1.png" alt="" /></figure>
                            <h5>Ryan H.</h5>
                            <span className="designation">BBQ Enthusiast</span>
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

    {/* portfolio-section */}
    <section className="portfolio-section alternate-2">
        <div className="auto-container">
            <div className="single-item-carousel owl-carousel owl-theme owl-dots-none">
                <div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/images/resource/portfolio-1.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <div className="inner">
                                <span>Current Promotion</span>
                                <h4><a href="promotions">Football Watch Party Bundles</a></h4>
                                <div className="link"><a href="promotions"><i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/images/resource/portfolio-2.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <div className="inner">
                                <span>Special Offer</span>
                                <h4><a href="promotions">Family Feast Packages</a></h4>
                                <div className="link"><a href="promotions"><i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/images/resource/portfolio-3.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <div className="inner">
                                <span>Limited Time</span>
                                <h4><a href="promotions">Weekend BBQ Specials</a></h4>
                                <div className="link"><a href="promotions"><i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* portfolio-section end */}

    {/* news-style-two */}
    <section className="news-style-two bg-color-3">
        <div className="auto-container">
            <div className="sec-title style-two light centred">
                <span>Upcoming Events</span>
                <h2>Don't Miss Out</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="events"><img src="/images/news/news-1.jpg" alt="" /></a></figure>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li><a href="events">October 15, 2025</a>,</li>
                                    <li>Kingz Smoke Ringz BBQ</li>
                                </ul>
                                <h4><a href="events">Football Season Kickoff Party</a></h4>
                                <p>Join us for our annual football watch party with premium BBQ, cold drinks, and game-day specials</p>
                                <div className="link"><a href="events">LEARN MORE<i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="events"><img src="/images/news/news-2.jpg" alt="" /></a></figure>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li><a href="events">November 5, 2025</a>,</li>
                                    <li>Kingz Smoke Ringz BBQ</li>
                                </ul>
                                <h4><a href="events">BBQ Masterclass Workshop</a></h4>
                                <p>Learn pitmaster techniques from Chef Glenn himself - limited spots available</p>
                                <div className="link"><a href="events">LEARN MORE<i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="events"><img src="/images/news/news-3.jpg" alt="" /></a></figure>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li><a href="events">December 10, 2025</a>,</li>
                                    <li>Kingz Smoke Ringz BBQ</li>
                                </ul>
                                <h4><a href="events">Holiday Catering Showcase</a></h4>
                                <p>Experience our gourmet catering services at our annual holiday tasting event</p>
                                <div className="link"><a href="events">LEARN MORE<i className="flaticon-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-btn centred">
                <a href="events" className="theme-btn">View All Events</a>
            </div>
        </div>
    </section>
    {/* news-style-two end */}

    {/* Catering Booking Modal */}
    <div className={`modal fade ${modalOpen ? 'show' : ''}`} style={{ display: modalOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <div className="modal-header" style={{ backgroundImage: 'url(/images/icons/bg-icon-1.png)', backgroundSize: 'cover', color: 'white', borderRadius: '15px 15px 0 0' }}>
            <h5 className="modal-title">Book Your Catering Event</h5>
            <button type="button" className="close" onClick={() => setModalOpen(false)} style={{ color: 'white' }}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ padding: '30px' }}>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" style={{ borderRadius: '10px', paddingLeft: '40px' }} />
                    <i className="fas fa-user" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
                    <input type="email" className="form-control" id="email" placeholder="your@email.com" style={{ borderRadius: '10px', paddingLeft: '40px' }} />
                    <i className="fas fa-envelope" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="phone" style={{ fontWeight: 'bold' }}>Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" style={{ borderRadius: '10px', paddingLeft: '40px' }} />
                    <i className="fas fa-phone" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="eventDate" style={{ fontWeight: 'bold' }}>Event Date</label>
                    <input type="date" className="form-control" id="eventDate" style={{ borderRadius: '10px', paddingLeft: '40px' }} />
                    <i className="fas fa-calendar" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="guests" style={{ fontWeight: 'bold' }}>Estimated Guests</label>
                    <input type="number" className="form-control" id="guests" placeholder="50" style={{ borderRadius: '10px', paddingLeft: '40px' }} />
                    <i className="fas fa-users" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="eventType" style={{ fontWeight: 'bold' }}>Event Type</label>
                    <select className="form-control" id="eventType" style={{ borderRadius: '10px', paddingLeft: '40px' }}>
                      <option value="">Select Event Type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                    <i className="fas fa-glass-cheers" style={{ position: 'absolute', left: '10px', top: '60%', transform: 'translateY(-50%)', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-group" style={{ position: 'relative' }}>
                    <label htmlFor="message" style={{ fontWeight: 'bold' }}>Special Requests</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Any dietary restrictions, special requests, or additional details..." style={{ borderRadius: '10px', paddingLeft: '40px' }}></textarea>
                    <i className="fas fa-comment" style={{ position: 'absolute', left: '10px', top: '40px', color: '#999', zIndex: 1, marginTop: '10px' }}></i>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{ justifyContent: 'center', borderTop: 'none' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#d9534f', borderColor: '#d9534f', borderRadius: '25px', padding: '10px 30px', marginRight: '10px' }}>Submit Inquiry</button>
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)} style={{ borderRadius: '25px', padding: '10px 30px' }}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {modalOpen && <div className="modal-backdrop fade show" onClick={() => setModalOpen(false)}></div>}
</>
  );
}
