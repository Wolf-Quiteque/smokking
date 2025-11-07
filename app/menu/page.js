'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../../lib/CartContext';

export default function Menu() {
  const { addToCart, getTotalItems, toggleCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuData, setMenuData] = useState({});
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [menuError, setMenuError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch menu from Square API
  useEffect(() => {
    async function fetchSquareMenu() {
      try {
        setIsLoadingMenu(true);
        const response = await fetch('/api/square/menu?menu=BBQ');
        const data = await response.json();

        if (data.success && data.items && data.items.length > 0) {
          // Group items by category
          const grouped = data.items.reduce((acc, item) => {
            const category = item.category || 'other';
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(item);
            return acc;
          }, {});

          setMenuData(grouped);
          setMenuError(null);
        } else {
          // If no items from Square, show error
          console.error('No items returned from Square API');
          setMenuError('Failed to load menu items from Square.');
          setMenuData({});
        }
      } catch (error) {
        console.error('Error fetching Square menu:', error);
        setMenuError('Failed to load menu from Square. Please try again later.');
        setMenuData({});
      } finally {
        setIsLoadingMenu(false);
      }
    }

    fetchSquareMenu();
  }, []);

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

  // Pagination calculations
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm, priceRange]);

  // Pagination component
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav aria-label="Page navigation" style={{ marginTop: '40px' }}>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="First"
            >
              <span aria-hidden="true">&laquo;&laquo;</span>
            </button>
          </li>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          {startPage > 1 && (
            <>
              <li className="page-item">
                <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
              </li>
              {startPage > 2 && <li className="page-item disabled"><span className="page-link">...</span></li>}
            </>
          )}

          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <li className="page-item disabled"><span className="page-link">...</span></li>}
              <li className="page-item">
                <button className="page-link" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
              </li>
            </>
          )}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Last"
            >
              <span aria-hidden="true">&raquo;&raquo;</span>
            </button>
          </li>
        </ul>
        <div className="text-center mt-3" style={{ color: '#666' }}>
          <small>Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)} of {filteredItems.length} items</small>
        </div>
      </nav>
    );
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
            <figure className="image-box" style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
                unoptimized={true}
              />
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

  // Show loading state
  if (isLoadingMenu) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #ff6b35',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <h3 style={{ color: '#333' }}>Loading Menu...</h3>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

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
              <figure className="logo-box pull-left" style={{ position: 'relative', width: '150px', height: '60px' }}>
                <a href="/">
                  <Image src="/images/logo_new.webp" alt="Kingz BBQ Logo" fill style={{ objectFit: 'contain' }} priority />
                </a>
              </figure>
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
          {/* Show error message if menu failed to load from Square */}
          {menuError && (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              color: '#856404',
              padding: '15px 20px',
              borderRadius: '8px',
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '20px' }}></i>
              <div>
                <strong>Notice:</strong> {menuError}
              </div>
            </div>
          )}
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
                    <div className="filter-results-header" style={{ marginBottom: '30px' }}>
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
                              background: '#ff6b35',
                              color: 'white',
                              border: 'none',
                              padding: '8px 16px',
                              borderRadius: '4px',
                              fontSize: '13px',
                              cursor: 'pointer'
                            }}
                          >
                            <i className="fas fa-times" style={{ marginRight: '5px' }}></i>
                            Clear Filters
                          </button>
                        )}
                      </h3>
                    </div>
                    <div className="row clearfix">
                      {currentItems.length > 0 ? (
                        renderMenuItems(currentItems)
                      ) : (
                        <div className="col-12">
                          <div className="no-results" style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            background: '#f8f9fa',
                            borderRadius: '10px'
                          }}>
                            <i className="fas fa-search" style={{ fontSize: '48px', color: '#ddd', marginBottom: '20px' }}></i>
                            <h4>No items match your filters</h4>
                            <p style={{ color: '#666' }}>Try adjusting your search or filters</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {renderPagination()}
                  </>
                ) : (
                  <>
                    {Object.keys(menuData).map(category => {
                      const categoryItems = menuData[category] || [];
                      if (categoryItems.length === 0) return null;

                      const categoryTitle = category
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                      // Show only 5 items initially
                      const initialItems = categoryItems.slice(0, 5);
                      const hasMoreItems = categoryItems.length > 5;

                      return (
                        <div key={category} id={category} className="menu-category" style={{ marginBottom: '50px' }}>
                          <h2 className="category-title" style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            paddingBottom: '10px',
                            borderBottom: '3px solid #ff6b35'
                          }}>
                            {categoryTitle}
                          </h2>
                          <div className="row clearfix">
                            {renderMenuItems(initialItems)}
                          </div>
                          {hasMoreItems && (
                            <div className="text-center" style={{ marginTop: '30px' }}>
                              <button
                                onClick={() => setActiveCategory(category)}
                                className="theme-btn"
                                style={{
                                  background: '#ff6b35',
                                  color: 'white',
                                  border: 'none',
                                  padding: '12px 30px',
                                  borderRadius: '5px',
                                  fontSize: '16px',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => e.target.style.background = '#e55a2b'}
                                onMouseOut={(e) => e.target.style.background = '#ff6b35'}
                              >
                                See More {categoryTitle} Items ({categoryItems.length - 5} more)
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop-page-section end */}

      {/* Custom pagination styles */}
      <style jsx>{`
        .pagination {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .pagination .page-item {
          list-style: none;
        }

        .pagination .page-link {
          position: relative;
          display: block;
          padding: 0.5rem 0.75rem;
          margin: 0;
          line-height: 1.25;
          color: #333;
          background-color: #fff;
          border: 1px solid #dee2e6;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination .page-link:hover {
          z-index: 2;
          color: #fff;
          background-color: #ff6b35;
          border-color: #ff6b35;
        }

        .pagination .page-item.active .page-link {
          z-index: 3;
          color: #fff;
          background-color: #ff6b35;
          border-color: #ff6b35;
        }

        .pagination .page-item.disabled .page-link {
          color: #6c757d;
          pointer-events: none;
          cursor: auto;
          background-color: #fff;
          border-color: #dee2e6;
          opacity: 0.5;
        }

        .pagination .page-link:focus {
          z-index: 3;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(255, 107, 53, 0.25);
        }

        @media (max-width: 768px) {
          .pagination {
            font-size: 14px;
          }

          .pagination .page-link {
            padding: 0.4rem 0.6rem;
          }
        }
      `}</style>
    </>
  );
}
