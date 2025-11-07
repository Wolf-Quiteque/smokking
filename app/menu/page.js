'use client';

import { useState } from 'react';
import { useCart } from '../../lib/CartContext';

export default function Menu() {
  const { addToCart, getTotalItems, toggleCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Menu data structure
  const menuData = {
    'lunch-specials': [
      { id: 1, name: '2-3 Baby Back Ribs, Side, & Drink', price: 14.40, description: 'Easy lunch with top sellers.', image: '/images/menu/shop-2.png', category: 'lunch-specials', prepTime: 0, orderType: 'On Hand' },
      { id: 2, name: '1/2lb. Brisket, Side, & Drink', price: 14.40, description: 'Easy lunch with top sellers.', image: '/images/menu/shop-3.png', category: 'lunch-specials', prepTime: 0, orderType: 'On Hand' },
      { id: 3, name: 'Turkey Leg, Side, & Drink', price: 18.00, description: 'Easy lunch with top sellers. Requires 8 hours advance notice.', image: '/images/menu/shop-4.png', category: 'lunch-specials', prepTime: 8, orderType: 'Custom Order' }
    ],
    'meats': [
      { id: 4, name: 'Brisket', price: 30.00, unit: '/ lb', description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/menu/shop-4.png', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 5, name: 'Pork Roast', price: 25.00, unit: '/ lb', image: '/images/resource/shop/shop-5.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 6, name: 'Pork Spare Ribs', price: 36.00, image: '/images/resource/shop/shop-10.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 7, name: 'Slab St. Louis Style Ribs', price: 36.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-10.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 8, name: 'Slab Baby Back Ribs', price: 42.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-11.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 9, name: '1lb. Chicken', price: 20.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-12.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 10, name: '1lb. Hot links', price: 20.00, image: '/images/resource/shop/shop-13.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 11, name: '1lb. Boudin Links', price: 20.00, image: '/images/resource/shop/shop-1.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 12, name: '1lb. Mild Sausage', price: 20.00, image: '/images/resource/shop/shop-2.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 13, name: '1lb. Cajun Sausage', price: 20.00, image: '/images/resource/shop/shop-3.jpg', category: 'meats', prepTime: 0, orderType: 'On Hand' },
      { id: 54, name: '1lb. Turkey Wings', price: 25.00, description: 'Requires 8 hours advance notice. Kept frozen; require prep before cooking.', image: '/images/resource/shop/shop-4.jpg', category: 'meats', prepTime: 8, orderType: 'Custom Order' },
      { id: 55, name: 'Turkey Leg', price: 25.00, description: 'Requires 8 hours advance notice. Kept frozen; require prep before cooking.', image: '/images/resource/shop/shop-5.jpg', category: 'meats', prepTime: 8, orderType: 'Custom Order' },
      { id: 56, name: 'Oxtails', price: 35.00, unit: '/ lb', description: 'Requires 48 hours advance notice. Must be purchased fresh and slow-cooked.', image: '/images/resource/shop/shop-10.jpg', category: 'meats', prepTime: 48, orderType: 'Custom Order' }
    ],
    'dinners': [
      { id: 14, name: 'Kingz Special Dinner', price: 28.00, description: 'Brisket, sausage, and ribs with two sides.', image: '/images/resource/shop/shop-1.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 15, name: 'Brisket Dinner', price: 20.00, description: 'Brisket with two sides.', image: '/images/resource/shop/shop-2.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 16, name: 'Rib Dinner', price: 20.00, description: 'Ribs with two sides.', image: '/images/resource/shop/shop-3.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 17, name: 'Chicken Dinner', price: 16.00, description: 'Chicken with two sides.', image: '/images/resource/shop/shop-4.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 18, name: 'Boudin Link Dinner', price: 17.00, description: 'Boudin links with two sides.', image: '/images/resource/shop/shop-5.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 19, name: 'Sausage Dinner', price: 17.00, description: 'Sausage with two sides.', image: '/images/resource/shop/shop-10.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 20, name: 'Two Meat Dinner', price: 22.00, description: 'Two meats with two sides.', image: '/images/resource/shop/shop-11.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 21, name: 'Homemade Beef Link Dinner', price: 17.00, description: 'Beef links with two sides.', image: '/images/resource/shop/shop-12.jpg', category: 'dinners', prepTime: 0, orderType: 'On Hand' },
      { id: 22, name: 'Turkey Leg Dinner', price: 22.00, description: 'Turkey leg with two sides. Requires 8 hours advance notice.', image: '/images/resource/shop/shop-13.jpg', category: 'dinners', prepTime: 8, orderType: 'Custom Order' },
      { id: 57, name: 'Turkey Wings Dinner', price: 25.00, description: 'Turkey wings with two sides. Requires 8 hours advance notice.', image: '/images/resource/shop/shop-1.jpg', category: 'dinners', prepTime: 8, orderType: 'Custom Order' }
    ],
    'sandwiches': [
      { id: 23, name: 'Sliced/Chopped Brisket Sandwich', price: 13.00, image: '/images/resource/shop/shop-4.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' },
      { id: 24, name: 'Kingz\' Sandwich', price: 15.00, description: 'Brisket & sausage.', image: '/images/resource/shop/shop-5.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' },
      { id: 25, name: 'Rib Sandwich', price: 13.00, image: '/images/resource/shop/shop-10.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' },
      { id: 26, name: 'Sausage Sandwich', price: 12.00, image: '/images/resource/shop/shop-11.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' },
      { id: 27, name: 'Boudain Link & Crackers Sandwich', price: 12.00, image: '/images/resource/shop/shop-12.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' },
      { id: 28, name: 'Homemade Link Sandwich', price: 12.00, image: '/images/resource/shop/shop-13.jpg', category: 'sandwiches', prepTime: 0, orderType: 'On Hand' }
    ],
    'baked-potatoes': [
      { id: 29, name: 'Big Kingz\' Potato', price: 25.00, description: 'Chopped Brisket, Sausage & Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-11.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' },
      { id: 30, name: 'Baby Back Rib Potato', price: 25.00, description: 'Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-12.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' },
      { id: 31, name: 'St. Louis Style Rib Potato', price: 25.00, description: 'Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-13.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' },
      { id: 32, name: 'Lil Kingz\' Chopped Beef Potato', price: 20.00, description: 'Chopped beef, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-1.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' },
      { id: 33, name: 'Sausage Potato', price: 15.00, description: 'Sausage, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-2.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' },
      { id: 34, name: 'Chicken Potato', price: 15.00, description: 'Chicken, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-3.jpg', category: 'baked-potatoes', prepTime: 0, orderType: 'Quick Cook' }
    ],
    'sides': [
      { id: 35, name: 'Dirty Rice', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-1.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' },
      { id: 36, name: 'Green Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-2.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' },
      { id: 37, name: 'Sweet Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-3.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' },
      { id: 38, name: 'Pinto Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-4.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' },
      { id: 39, name: 'Potato Salad', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-5.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' },
      { id: 40, name: 'Broccoli Cheese Rice Casserole', price: 9.50, priceRange: '$9.50 - $95.00', image: '/images/resource/shop/shop-10.jpg', category: 'sides', prepTime: 0, orderType: 'On Hand' }
    ],
    'drinks': [
      { id: 41, name: 'Water', price: 1.00, description: 'Refreshing bottled water.', image: '/images/resource/shop/shop-4.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 42, name: 'Juice - Mango Punch', price: 3.00, description: 'Kingz\' signature juice flavors.', image: '/images/resource/shop/shop-5.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 43, name: 'Juice - Fruit Punch', price: 3.00, description: 'Kingz\' signature juice flavors.', image: '/images/resource/shop/shop-10.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 44, name: 'Juice - Watermelon Punch', price: 3.00, description: 'Kingz\' signature juice flavors.', image: '/images/resource/shop/shop-11.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 45, name: 'Kingz\' Famous Tea', price: 3.00, description: 'Our signature sweet tea.', image: '/images/resource/shop/shop-12.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 46, name: 'Pepsi', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-13.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 47, name: 'Mtn Dew', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-1.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 48, name: 'Pepsi Mango', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-2.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 49, name: 'Mtn Dew Code Red', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-3.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 50, name: 'Starry', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-4.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 51, name: 'Mtn Dew Frost Bite', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-5.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 52, name: 'Mug Root Beer', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-10.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' },
      { id: 53, name: 'Mtn Dew Pitch Black', price: 3.00, description: 'Cold refreshing soda.', image: '/images/resource/shop/shop-11.jpg', category: 'drinks', prepTime: 0, orderType: 'On Hand' }
    ]
  };

  // Flatten menu data for filtering
  const allMenuItems = Object.values(menuData).flat();

  // Filter items based on active filters
  const filteredItems = allMenuItems.filter(item => {
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    
    // Price range filter
    if (item.price < priceRange[0] || item.price > priceRange[1]) {
      return false;
    }
    
    // Search term filter
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });


  // Handle price range change
  const handlePriceRangeChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  // Render menu items with consistent Add to Cart buttons
  const renderMenuItems = (items) => {
    return items.map(item => (
      <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 shop-block">
        <div className="shop-block-one">
          <div className="inner-box">
            <figure className="image-box">
              <img src={item.image} alt={item.name} />
              {item.prepTime > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: item.prepTime >= 48 ? '#dc3545' : '#ff6b35',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {item.prepTime >= 48 ? '48h Notice' : '8h Notice'}
                </div>
              )}
            </figure>
            <div className="lower-content">
              <h6><a href="#">{item.name}</a></h6>
              {item.description && <p>{item.description}</p>}
              {item.prepTime > 0 && (
                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  color: '#856404',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  fontSize: '12px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-clock" style={{marginRight: '8px', color: '#ffc107'}}></i>
                  <strong>Requires {item.prepTime} hours advance notice</strong>
                </div>
              )}
              {item.orderType && (
                <div style={{
                  display: 'inline-block',
                  background: item.orderType === 'On Hand' ? '#d4edda' : item.orderType === 'Custom Order' ? '#fff3cd' : '#d1ecf1',
                  color: item.orderType === 'On Hand' ? '#155724' : item.orderType === 'Custom Order' ? '#856404' : '#0c5460',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  {item.orderType}
                </div>
              )}
              <span className="price">
                ${item.price.toFixed(2)}
                {item.unit && ` ${item.unit}`}
                {item.priceRange && ` ${item.priceRange}`}
              </span>
              <button
                onClick={() => addToCart(item)}
                className="theme-btn"
                style={{
                  marginTop: '15px',
                  width: '100%',
                  fontSize: '14px',
                  padding: '12px 20px'
                }}
              >
                <i className="flaticon-cart" style={{marginRight: '8px'}}></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

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
                      <li className="current"><a href="/menu">Menu</a></li>
                      <li><a href="/catering">Catering</a></li>
                      
                      
                      <li><a href="/events">Events</a></li>
                    </ul>
                  </div>
                </nav>
                <ul className="menu-right-content pull-left clearfix">
                
                  <li className="cart-box">
                    <a href="#" className='nav-toggler navSidebar-button' >
                      <i className="flaticon-shopping-cart-1"></i>
                      <span>{getTotalItems()}</span>
                    </a>
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
                      <li className="current"><a href="/menu">Menu</a></li>
                      <li><a href="/catering">Catering</a></li>
                      
                      
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
              <h1>Menu</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* shop-page-section */}
      <section className="shop-page-section sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="sidebar shop-sidebar">
                <div className="sidebar-widget search-widget">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <div className="widget-content">
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Search menu items..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="button"><i className="flaticon-search"></i></button>
                    </div>
                  </div>
                </div>
                
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <i className="flaticon-right"></i>
                        <a 
                          href="#" 
                          className={activeCategory === 'all' ? 'active' : ''}
                          onClick={(e) => { e.preventDefault(); setActiveCategory('all'); }}
                        >
                          All Items
                        </a>
                      </li>
                      {Object.keys(menuData).map(category => (
                        <li key={category}>
                          <i className="flaticon-right"></i>
                          <a 
                            href={`#${category}`} 
                            className={activeCategory === category ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); setActiveCategory(category); }}
                          >
                            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="sidebar-widget filter-widget">
                  <div className="widget-title">
                    <h3>Filter by Price</h3>
                  </div>
                  <div className="widget-content">
                    <div className="price-range-slider">
                      <div className="range-slider">
                        <input 
                          type="range" 
                          min="0" 
                          max="50" 
                          step="5"
                          value={priceRange[0]} 
                          onChange={(e) => handlePriceRangeChange(e, 0)}
                          className="slider"
                        />
                        <input 
                          type="range" 
                          min="0" 
                          max="50" 
                          step="5"
                          value={priceRange[1]} 
                          onChange={(e) => handlePriceRangeChange(e, 1)}
                          className="slider"
                        />
                      </div>
                      <div className="price-inputs">
                        <div className="field">
                          <span>Min: ${priceRange[0]}</span>
                        </div>
                        <div className="field">
                          <span>Max: ${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sidebar-widget sidebar-tags">
                  <div className="widget-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li><a href="#brisket" onClick={(e) => { e.preventDefault(); setSearchTerm('brisket'); }}>Brisket</a></li>
                      <li><a href="#ribs" onClick={(e) => { e.preventDefault(); setSearchTerm('ribs'); }}>Ribs</a></li>
                      <li><a href="#chicken" onClick={(e) => { e.preventDefault(); setSearchTerm('chicken'); }}>Chicken</a></li>
                      <li><a href="#pork" onClick={(e) => { e.preventDefault(); setSearchTerm('pork'); }}>Pork</a></li>
                      <li><a href="#bbq" onClick={(e) => { e.preventDefault(); setSearchTerm('bbq'); }}>BBQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="our-shop">
                {searchTerm || activeCategory !== 'all' || (priceRange[0] > 0 || priceRange[1] < 50) ? (
                  <>
                    <div className="filter-results-header">
                      <h3>
                        {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
                        {(searchTerm || activeCategory !== 'all' || (priceRange[0] > 0 || priceRange[1] < 50)) && (
                          <button 
                            onClick={() => {
                              setSearchTerm('');
                              setActiveCategory('all');
                              setPriceRange([0, 50]);
                            }} 
                            className="clear-filters-btn"
                            style={{
                              marginLeft: '15px',
                              background: '#f8f8f8',
                              border: '1px solid #ddd',
                              padding: '5px 10px',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                          >
                            Clear Filters
                          </button>
                        )}
                      </h3>
                    </div>
                    <div className="row clearfix">
                      {filteredItems.length > 0 ? (
                        renderMenuItems(filteredItems)
                      ) : (
                        <div className="col-12">
                          <div className="no-results">
                            <h4>No items match your filters</h4>
                            <p>Try adjusting your search or filters</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Lunch Specials */}
                    <div id="lunch-specials" className="menu-category">
                      <h2 className="category-title">Lunch Specials</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['lunch-specials'])}
                      </div>
                    </div>

                    {/* Meats */}
                    <div id="meats" className="menu-category">
                      <h2 className="category-title">Meats</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['meats'])}
                      </div>
                    </div>

                    {/* Dinners */}
                    <div id="dinners" className="menu-category">
                      <h2 className="category-title">Dinners</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['dinners'])}
                      </div>
                    </div>

                    {/* Sandwiches */}
                    <div id="sandwiches" className="menu-category">
                      <h2 className="category-title">Sandwiches</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['sandwiches'])}
                      </div>
                    </div>

                    {/* Baked Potatoes */}
                    <div id="baked-potatoes" className="menu-category">
                      <h2 className="category-title">Baked Potatoes</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['baked-potatoes'])}
                      </div>
                    </div>

                    {/* Sides */}
                    <div id="sides" className="menu-category">
                      <h2 className="category-title">Sides</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['sides'])}
                      </div>
                    </div>

                    {/* Drinks */}
                    <div id="drinks" className="menu-category">
                      <h2 className="category-title">Drinks</h2>
                      <div className="row clearfix">
                        {renderMenuItems(menuData['drinks'])}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop-page-section end */}
    </>
  );
}