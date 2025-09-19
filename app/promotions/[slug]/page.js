export default function PromotionDetail({ params }) {
  const { slug } = params;

  // Mock data - in real app, fetch based on slug
  const promotionData = {
    'fight-night': {
      title: 'Fight Night Spread',
      description: 'Perfect for game day gatherings with friends and family',
      image: '/images/resource/about-1.jpg',
      options: [
        {
          size: 'Small (10-15 people)',
          items: '2 lbs brisket, 1 rack ribs, sides for 15',
          price: '$149.99'
        },
        {
          size: 'Medium (20-25 people)',
          items: '3 lbs brisket, 2 racks ribs, sides for 25',
          price: '$249.99'
        },
        {
          size: 'Large (30-35 people)',
          items: '5 lbs brisket, 3 racks ribs, sides for 35',
          price: '$349.99'
        }
      ]
    },
    'football-watch-party': {
      title: 'BBQ Football Watch Party Package',
      description: 'Everything you need for the ultimate game day experience',
      image: '/images/resource/about-2.jpg',
      options: [
        {
          size: 'Small (10-15 people)',
          items: 'Mixed meats platter, wings, nachos, beer',
          price: '$199.99'
        },
        {
          size: 'Medium (20-25 people)',
          items: 'Large mixed meats, wings, loaded fries, beer',
          price: '$299.99'
        },
        {
          size: 'Large (30-35 people)',
          items: 'Premium meats selection, appetizers, desserts, beer',
          price: '$449.99'
        }
      ]
    }
  };

  const promotion = promotionData[slug];

  if (!promotion) {
    return (
      <div className="promotion-detail-page">
        <section className="page-title bg-color-1">
          <div className="auto-container">
            <div className="content-box centred">
              <h1>Promotion Not Found</h1>
              <p>The promotion you're looking for doesn't exist.</p>
              <a href="/promotions" className="theme-btn">Back to Promotions</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="promotion-detail-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>{promotion.title}</h1>
            <p>{promotion.description}</p>
          </div>
        </div>
      </section>

      <section className="promotion-detail-section bg-color-3">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="promotion-image">
                <img src={promotion.image} alt={promotion.title} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="promotion-details">
                <h2>{promotion.title}</h2>
                <p>{promotion.description}</p>

                <div className="pricing-table">
                  <h3>Choose Your Size</h3>
                  {promotion.options.map((option, index) => (
                    <div key={index} className="pricing-option">
                      <div className="option-header">
                        <h4>{option.size}</h4>
                        <span className="price">{option.price}</span>
                      </div>
                      <p>{option.items}</p>
                      <button className="theme-btn">Order Now</button>
                    </div>
                  ))}
                </div>

                <div className="promotion-cta">
                  <p>Call us at (555) 123-4567 to place your order or customize this package!</p>
                  <a href="/catering" className="theme-btn">Request Catering Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
