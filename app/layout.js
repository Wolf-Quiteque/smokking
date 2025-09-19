'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <div className="boxed_wrapper ltr">

       
    {/* sidebar cart item */}
    <div className="xs-sidebar-group info-group info-sidebar"style={{ backgroundImage: 'url(/images/background/page-title.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="xs-overlay xs-bg-black" onClick={() => document.getElementById('cart-sidebar').style.display = 'none'}></div>
        <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <a href="#" className="close-side-widget" onClick={(e) => { e.preventDefault(); document.getElementById('cart-sidebar').style.display = 'none'; }}>X</a>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="logo">
                                <a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" /></a>
                            </div>
                            <div className="cart-content" style={{background: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
                                <h4 style={{color: '#fff', marginBottom: '20px'}}>Your Cart</h4>
                                <div id="cart-items" className="cart-items" style={{maxHeight: '300px', overflowY: 'auto', marginBottom: '20px'}}>
                                    {/* Cart items will be populated here */}
                                </div>
                                <div className="cart-total" style={{borderTop: '1px solid #fff', paddingTop: '15px', marginBottom: '20px'}}>
                                    <h5 style={{color: '#fff'}}>Total: <span id="cart-total" style={{color: '#ff6b35'}}>$0.00</span></h5>
                                </div>
                                <div className="cart-buttons">
                                    <a href="/checkout" className="theme-btn" style={{width: '100%', textAlign: 'center', display: 'block'}}>Checkout<i className="fas fa-long-arrow-alt-right"></i></a>
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
                                <div className="nav-btn nav-toggler navSidebar-button clearfix">
                                      <a href="#"><i className="flaticon-shopping-cart-1"></i><span>0</span></a>
                                </div>
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
                                        <li><a href="#catering">Catering</a></li>
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
