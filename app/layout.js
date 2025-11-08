'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { CartProvider, useCart } from '../lib/CartContext';
import SquareCheckoutModal from '../lib/SquareCheckoutModal';
import Preloader from '../components/Preloader';
import { useState } from 'react';


function LayoutContent({ children, pathname }) {
  const { cart, isCartOpen, getTotalItems, getTotalPrice, updateQuantity, removeFromCart, closeCart, toggleCart } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    closeCart(); // Close the cart sidebar
    setIsCheckoutModalOpen(true); // Open the checkout modal
  };

  const handlePaymentSuccess = (paymentIntent) => {
    // Clear the cart
    cart.forEach(item => removeFromCart(item.id));

    // Show success message
    alert(`Payment successful! Order ID: ${paymentIntent.id}\n\nThank you for your order! We'll send you a confirmation email shortly.`);

    // Close modal
    setIsCheckoutModalOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        {/* Square Web Payments SDK */}
        <script
          type="text/javascript"
          src="https://sandbox.web.squarecdn.com/v1/square.js"
        ></script>
        {/* Stylesheets */}
        <link href="/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/css/flaticon.css" rel="stylesheet" />
        <link href="/css/owl.css" rel="stylesheet" />
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/color.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
      </head>
      <body >
            {/* Preloader */}
            <Preloader />

            <div className="boxed_wrapper ltr">


    {/* sidebar cart item */}
    <div id="cart-sidebar" className={`xs-sidebar-group info-group info-sidebar ${isCartOpen ? 'active' : ''}`} style={{ backgroundImage: 'url(/images/background/page-title.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="xs-overlay xs-bg-black" onClick={closeCart}></div>
        <div className="xs-sidebar-widget" style={{
          maxHeight: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <a href="#" className="close-side-widget" onClick={(e) => { e.preventDefault(); closeCart(); }}>X</a>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="logo">
                                <a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" /></a>
                            </div>
                            <div className="cart-content" style={{background: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
                                <h4 style={{color: '#fff', marginBottom: '20px'}}>Your Cart</h4>
                                <div id="cart-items" className="cart-items" style={{
                                  maxHeight: '400px',
                                  overflowY: 'auto',
                                  marginBottom: '20px',
                                  paddingRight: '10px'
                                }}>
                                    {cart.length === 0 ? (
                                      <p style={{color: '#fff', textAlign: 'center'}}>Your cart is empty</p>
                                    ) : (
                                      cart.map(item => (
                                        <div key={item.id} className="cart-item" style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '10px',
                                          padding: '15px 0',
                                          borderBottom: '1px solid rgba(255,255,255,0.2)',
                                          color: '#fff'
                                        }}>
                                          <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                            <img src={item.image} alt={item.name} style={{
                                              width: '60px',
                                              height: '60px',
                                              objectFit: 'cover',
                                              borderRadius: '5px',
                                              flexShrink: 0
                                            }} />
                                            <div style={{flex: 1, minWidth: 0}}>
                                              <h6 style={{margin: '0 0 5px 0', fontSize: '14px', color: '#fff', wordBreak: 'break-word'}}>{item.name}</h6>
                                              <p style={{margin: '0', fontSize: '13px', color: '#ff6b35'}}>${item.price.toFixed(2)} each</p>
                                            </div>
                                          </div>
                                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap'}}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                              <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                style={{
                                                  background: '#d9534f',
                                                  color: 'white',
                                                  border: 'none',
                                                  padding: '6px 12px',
                                                  borderRadius: '4px',
                                                  cursor: 'pointer',
                                                  fontSize: '14px',
                                                  fontWeight: 'bold'
                                                }}
                                              >-</button>
                                              <span style={{minWidth: '30px', textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>{item.quantity}</span>
                                              <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                style={{
                                                  background: '#5cb85c',
                                                  color: 'white',
                                                  border: 'none',
                                                  padding: '6px 12px',
                                                  borderRadius: '4px',
                                                  cursor: 'pointer',
                                                  fontSize: '14px',
                                                  fontWeight: 'bold'
                                                }}
                                              >+</button>
                                            </div>
                                            <button
                                              onClick={() => removeFromCart(item.id)}
                                              style={{
                                                background: '#f0ad4e',
                                                color: 'white',
                                                border: 'none',
                                                padding: '6px 12px',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '12px'
                                              }}
                                            >Remove</button>
                                          </div>
                                        </div>
                                      ))
                                    )}
                                </div>
                                <div className="cart-total" style={{borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '15px', marginBottom: '20px'}}>
                                    <h5 style={{color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0}}>
                                      <span>Total:</span>
                                      <span id="cart-total" style={{color: '#ff6b35', fontSize: '24px', fontWeight: 'bold'}}>${getTotalPrice().toFixed(2)}</span>
                                    </h5>
                                </div>
                                <div className="cart-buttons">
                                    <button
                                      onClick={handleCheckoutClick}
                                      className="theme-btn"
                                      style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        display: 'block',
                                        padding: '12px',
                                        border: 'none',
                                        cursor: 'pointer'
                                      }}
                                    >
                                      Checkout<i className="fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* END sidebar widget item */}

    {pathname === '/' && (
      <>
        {/* main header */}
        <header className="main-header style-two">
            <div className="header-top">
                <div className="auto-container clearfix">
                    <div className="top-left pull-left clearfix">
                        <div className="left-info pull-left clearfix">
                            <ul className="social-links clearfix">
                                <li><a href="https://instagram.com/kingzsmokeringzbbq"><i className="fab fa-instagram"></i></a></li>

                            </ul>
                        </div>
                        <div className="logo-box" style={{marginLeft: '20px'}}>
                            <figure className="logo"><a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" /></a></figure>
                        </div>
                    </div>
                    <div className="top-right pull-right">
                        <ul className="menu-right-content pull-left clearfix">
                            <li className="user-box"><a href="index.html"><i className="flaticon-user-symbol-of-thin-outline"></i></a></li>
                            <li className="search-box-outer">
                                <div className="dropdown">
                                    <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-search"></span></button>
                                    <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                        <li className="panel-outer">
                                            <div className="form-container">
                                                <div className="form-group">
                                                    <input type="search" name="field-name" value="" placeholder="Search...." required="" />
                                                    <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="cart-box">
                                <a href="#" onClick={(e) => { e.preventDefault(); toggleCart(); }}>
                                  <i className="flaticon-shopping-cart-1"></i>
                                  <span>{getTotalItems()}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-upper">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="menu-area">
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler">
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light" >
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current"><a href="/">Home</a></li>
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

            {/* sticky Header */}
            <div className="sticky-header">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <figure className="logo-box pull-left"><a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" /></a></figure>
                        <div className="menu-area pull-right">
                            <nav className="main-menu clearfix" style={{marginTop: '15px'}}>
                                {/* Keep This Empty / Menu will come through Javascript */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* main-header end */}

        {/* Mobile Menu */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" title="Kingz Smoke Ringz BBQ" /></a></div>
                <div className="menu-outer">{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}</div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>12423 Hamill Path Drive</li>
                        <li><a href="tel:8602729738">860 -272 -9738</a></li>
                        <li><a href="mailto:info@kingzsmokeringzbbq.com">info@kingzsmokeringzbbq.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="https://instagram.com/kingzsmokeringzbbq"><span className="fab fa-instagram"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        {/* End Mobile Menu */}
      </>
    )}

  {children}

        {/* Checkout Modal */}
        <SquareCheckoutModal
          isOpen={isCheckoutModalOpen}
          onClose={() => setIsCheckoutModalOpen(false)}
          cart={cart}
          totalAmount={getTotalPrice()}
          onPaymentSuccess={handlePaymentSuccess}
        />

        {/* main-footer */}
        <footer className="main-footer">
            <div className="auto-container">
                <div className="footer-top">
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><a href="index.html"><img src="/images/logo_new.webp" alt="" /></a></figure>
                                    <div className="text">
                                        <p>Kingz Smoke Ringz BBQ - Serving the community with premium slow-smoked meats, gourmet catering, and BBQ supplies since 2014.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <ul className="info clearfix">
                                        <li>
                                            <i className="flaticon-phone"></i>
                                            <p>Call Us</p>
                                            <h5><a href="tel:8602729738">860 -272 -9738</a></h5>
                                        </li>
                                        <li>
                                            <i className="flaticon-maps-and-flags"></i>
                                            <p>Address</p>
                                            <h5>12423 Hamill Path Drive</h5>
                                        </li>
                                    </ul>
                                    <ul className="social-links clearfix">
                                        <li><a href="https://instagram.com/kingzsmokeringzbbq"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget newsletter-widget">
                                    <div className="widget-title">
                                        <h6>Newsletter</h6>
                                    </div>
                                    <div className="widget-content">
                                        <p>Stay updated on our latest BBQ specials, events, and promotions</p>
                                        <form action="https://azim.commonsupport.com/Carneshop/contact.html" method="post" className="newsletter-form">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" required />
                                                <button type="submit"><i className="flaticon-paper-plane-1"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom clearfix">
                    <div className="copyright pull-left"><h5>&copy;2025 <a href="index.html">Kingz Smoke Ringz BBQ</a>. All rights reserved.</h5></div>
                    <ul className="footer-nav pull-right clearfix">
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/catering">Catering</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        {/* main-footer end */}
        {/*Scroll to top*/}
        <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fa fa-arrow-up"></span>
        </button>
          </div>
        <Script src="/js/jquery.js" />
        <Script src="/js/popper.min.js" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/owl.js" />
        <Script src="/js/wow.js" />
        <Script src="/js/validation.js" />
        <Script src="/js/jquery.fancybox.js" />
        <Script src="/js/appear.js" />
        <Script src="/js/scrollbar.js" />
        <Script src="/js/nav-tool.js" />
        {/* main-js */}
        <Script src="/js/script.js" />
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <CartProvider>
      <LayoutContent pathname={pathname}>
        {children}
      </LayoutContent>
    </CartProvider>
  );
}
