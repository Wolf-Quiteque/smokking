'use client';

import { useState, useEffect } from 'react';

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Menu data structure
  const menuData = {
    'lunch-specials': [
      { id: 1, name: '2-3 Baby Back Ribs, Side, & Drink', price: 14.40, description: 'Easy lunch with top sellers.', image: '/images/resource/shop/shop-1.jpg', category: 'lunch-specials' },
      { id: 2, name: '1/2lb. Brisket, Side, & Drink', price: 14.40, description: 'Easy lunch with top sellers.', image: '/images/resource/shop/shop-2.jpg', category: 'lunch-specials' },
      { id: 3, name: 'Turkey Leg, Side, & Drink', price: 18.00, description: 'Easy lunch with top sellers.', image: '/images/resource/shop/shop-3.jpg', category: 'lunch-specials' }
    ],
    'meats': [
      { id: 4, name: 'Brisket', price: 30.00, unit: '/ lb', description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-4.jpg', category: 'meats' },
      { id: 5, name: 'Pork Roast', price: 25.00, unit: '/ lb', image: '/images/resource/shop/shop-5.jpg', category: 'meats' },
      { id: 6, name: 'Pork Spare Ribs', price: 36.00, image: '/images/resource/shop/shop-10.jpg', category: 'meats' },
      { id: 7, name: 'Slab St. Louis Style Ribs', price: 36.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-10.jpg', category: 'meats' },
      { id: 8, name: 'Slab Baby Back Ribs', price: 36.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-11.jpg', category: 'meats' },
      { id: 9, name: '1lb. Chicken', price: 20.00, description: 'Served with bread & Kingz\' BBQ sauce.', image: '/images/resource/shop/shop-12.jpg', category: 'meats' },
      { id: 10, name: '1lb. Hot links', price: 20.00, image: '/images/resource/shop/shop-13.jpg', category: 'meats' },
      { id: 11, name: '1lb. Boudin Links', price: 20.00, image: '/images/resource/shop/shop-1.jpg', category: 'meats' },
      { id: 12, name: '1lb. Mild Sausage', price: 20.00, image: '/images/resource/shop/shop-2.jpg', category: 'meats' },
      { id: 13, name: '1lb. Cajun Sausage', price: 20.00, image: '/images/resource/shop/shop-3.jpg', category: 'meats' }
    ],
    'dinners': [
      { id: 14, name: 'Kingz Special Dinner', price: 28.00, description: 'Brisket, sausage, and ribs with two sides.', image: '/images/resource/shop/shop-1.jpg', category: 'dinners' },
      { id: 15, name: 'Brisket Dinner', price: 20.00, description: 'Brisket with two sides.', image: '/images/resource/shop/shop-2.jpg', category: 'dinners' },
      { id: 16, name: 'Rib Dinner', price: 20.00, description: 'Ribs with two sides.', image: '/images/resource/shop/shop-3.jpg', category: 'dinners' },
      { id: 17, name: 'Chicken Dinner', price: 16.00, description: 'Chicken with two sides.', image: '/images/resource/shop/shop-4.jpg', category: 'dinners' },
      { id: 18, name: 'Boudin Link Dinner', price: 17.00, description: 'Boudin links with two sides.', image: '/images/resource/shop/shop-5.jpg', category: 'dinners' },
      { id: 19, name: 'Sausage Dinner', price: 17.00, description: 'Sausage with two sides.', image: '/images/resource/shop/shop-10.jpg', category: 'dinners' },
      { id: 20, name: 'Two Meat Dinner', price: 22.00, description: 'Two meats with two sides.', image: '/images/resource/shop/shop-11.jpg', category: 'dinners' },
      { id: 21, name: 'Homemade Beef Link Dinner', price: 17.00, description: 'Beef links with two sides.', image: '/images/resource/shop/shop-12.jpg', category: 'dinners' },
      { id: 22, name: 'Turkey Leg Dinner', price: 22.00, description: 'Turkey leg with two sides.', image: '/images/resource/shop/shop-13.jpg', category: 'dinners' }
    ],
    'sandwiches': [
      { id: 23, name: 'Sliced/Chopped Brisket Sandwich', price: 13.00, image: '/images/resource/shop/shop-4.jpg', category: 'sandwiches' },
      { id: 24, name: 'Kingz\' Sandwich', price: 15.00, description: 'Brisket & sausage.', image: '/images/resource/shop/shop-5.jpg', category: 'sandwiches' },
      { id: 25, name: 'Rib Sandwich', price: 13.00, image: '/images/resource/shop/shop-10.jpg', category: 'sandwiches' },
      { id: 26, name: 'Sausage Sandwich', price: 12.00, image: '/images/resource/shop/shop-11.jpg', category: 'sandwiches' },
      { id: 27, name: 'Boudain Link & Crackers Sandwich', price: 12.00, image: '/images/resource/shop/shop-12.jpg', category: 'sandwiches' },
      { id: 28, name: 'Homemade Link Sandwich', price: 12.00, image: '/images/resource/shop/shop-13.jpg', category: 'sandwiches' }
    ],
    'baked-potatoes': [
      { id: 29, name: 'Big Kingz\' Potato', price: 25.00, description: 'Chopped Brisket, Sausage & Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-11.jpg', category: 'baked-potatoes' },
      { id: 30, name: 'Baby Back Rib Potato', price: 25.00, description: 'Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-12.jpg', category: 'baked-potatoes' },
      { id: 31, name: 'St. Louis Style Rib Potato', price: 25.00, description: 'Ribs, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-13.jpg', category: 'baked-potatoes' },
      { id: 32, name: 'Lil Kingz\' Chopped Beef Potato', price: 20.00, description: 'Chopped beef, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-1.jpg', category: 'baked-potatoes' },
      { id: 33, name: 'Sausage Potato', price: 15.00, description: 'Sausage, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-2.jpg', category: 'baked-potatoes' },
      { id: 34, name: 'Chicken Potato', price: 15.00, description: 'Chicken, stuffed with butter, cheese, sour cream, chives.', image: '/images/resource/shop/shop-3.jpg', category: 'baked-potatoes' }
    ],
    'sides': [
      { id: 35, name: 'Dirty Rice', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-1.jpg', category: 'sides' },
      { id: 36, name: 'Green Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-2.jpg', category: 'sides' },
      { id: 37, name: 'Sweet Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-3.jpg', category: 'sides' },
      { id: 38, name: 'Pinto Beans', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-4.jpg', category: 'sides' },
      { id: 39, name: 'Potato Salad', price: 6.00, priceRange: '$6.00 - $15.00', image: '/images/resource/shop/shop-5.jpg', category: 'sides' },
      { id: 40, name: 'Broccoli Cheese Rice Casserole', price: 9.50, priceRange: '$9.50 - $95.00', image: '/images/resource/shop/shop-10.jpg', category: 'sides' }
    ],
    'drinks': [
      { id: 41, name: 'Various Pepsi Products', price: 2.00, description: '20oz bottles.', image: '/images/resource/shop/shop-4.jpg', category: 'drinks' }
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

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kingzCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('kingzCart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart with animation
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    // Add animation effect
    const cartIcon = document.querySelector('.cart-box i');
    if (cartIcon) {
      cartIcon.style.transform = 'scale(1.3)';
      cartIcon.style.color = '#ff6b35';
      setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.color = '';
      }, 300);
    }

    // Show success message
    showNotification(`${item.name} added to cart!`);
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get total items count
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close cart when clicking overlay
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Show notification when item is added to cart
  const showNotification = (message) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff6b35;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
        animation: slideInRight 0.5s ease-out;
      ">
        <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
        ${message}
      </div>
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.5s ease-in reverse';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  };

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
          
            </figure>
            <div className="lower-content">
              <h6><a href="#">{item.name}</a></h6>
              {item.description && <p>{item.description}</p>}
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
                      <li><a href="/packages">Packages</a></li>
                      
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
                                <input 
                                  type="search" 
                                  name="field-name" 
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerm(e.target.value)}
                                  placeholder="Search...." 
                                  required="" 
                                />
                                <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                              </div>
                            </form>
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
                  <li className="nav-box">
                    <div className="nav-toggler navSidebar-button clearfix">
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
                      <li className="current"><a href="/menu">Menu</a></li>
                      <li><a href="/catering">Catering</a></li>
                      <li><a href="/packages">Packages</a></li>
                      
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

      {/* Cart Sidebar */}
      <div id="cart-sidebar" className={`xs-sidebar-group info-group info-sidebar ${isCartOpen ? 'active' : ''}`}>
        <div className="xs-overlay xs-bg-black" onClick={closeCart}></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container" style={{backgroundImage: 'url(/images/background/page-title.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="widget-heading">
              <a href="#" className="close-side-widget" onClick={(e) => { e.preventDefault(); closeCart(); }}>×</a>
            </div>
            <div className="sidebar-textwidget">
              <div className="content-inner">
                <div className="logo">
                  <a href="/"><img src="/images/logo_new.webp" alt="Kingz Smoke Ringz BBQ" /></a>
                </div>
                <div className="content-box">
                  <h4>Your Cart</h4>
                  <div id="cart-items" style={{marginTop: '20px', marginBottom: '20px', maxHeight: '400px', overflowY: 'auto'}}>
                    {cart.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="cart-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={item.image} alt={item.name} style={{width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px'}} />
                            <div>
                              <h6 style={{margin: '0', fontSize: '14px'}}>{item.name}</h6>
                              <p style={{margin: '0', fontSize: '12px'}}>${item.price.toFixed(2)} each</p>
                            </div>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{background: '#d9534f', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', marginRight: '5px'}}>-</button>
                            <span style={{margin: '0 10px'}}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{background: '#5cb85c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', marginRight: '10px'}}>+</button>
                            <button onClick={() => removeFromCart(item.id)} style={{background: '#f0ad4e', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer'}}>Remove</button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div style={{borderTop: '1px solid #ddd', paddingTop: '15px', marginTop: '20px'}}>
                    <h5>Total: <span id="cart-total">${getTotalPrice().toFixed(2)}</span></h5>
                    <a href="/checkout" className="theme-btn" style={{marginTop: '15px', display: 'inline-block'}}>Checkout</a>
                  </div>
                </div>
                <div className="contact-info" style={{marginTop: '30px'}}>
                  <h4>Contact Info</h4>
                  <ul>
                    <li>12423 Hamill Path Drive</li>
                    <li><a href="tel:8602729738">860 -272 -9738</a></li>
                    <li><a href="mailto:info@kingzsmokeringzbbq.com">info@kingzsmokeringzbbq.com</a></li>
                  </ul>
                </div>
                <ul className="social-box">
                  <li className="instagram"><a href="https://instagram.com/kingzsmokeringzbbq" className="fab fa-instagram"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END cart sidebar */}
    </>
  );
}