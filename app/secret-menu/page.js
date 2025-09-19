export default function SecretMenu() {
  return (
    <div className="secret-menu-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Secret Menu</h1>
            <p>Exclusive dishes available only at the Ranch Meet-Up</p>
          </div>
        </div>
      </section>

      <section className="secret-menu-section bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred">
            <span>Secret Menu</span>
            <h2>Ranch Meet-Up Specials</h2>
          </div>

          <div className="secret-menu-intro">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <p>Our secret menu features exclusive BBQ creations that are only available during our Ranch Meet-Up events. These limited-time dishes are crafted with premium ingredients and innovative techniques that you won't find anywhere else.</p>
                <p>Join our community and vote for which secret menu items you'd like to see featured at the next meet-up!</p>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="ranch-badge">
                  <i className="flaticon-meat-4"></i>
                  <h3>Ranch Exclusive</h3>
                  <p>Available only at meet-ups</p>
                </div>
              </div>
            </div>
          </div>

          <div className="secret-dishes">
            <h3>Current Secret Menu Items</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-1.jpg" alt="Smoked Trout Dip" />
                  </div>
                  <div className="dish-content">
                    <h4>Smoked Trout Dip</h4>
                    <p>House-smoked trout blended with cream cheese, herbs, and served with artisanal crackers</p>
                    <div className="vote-section">
                      <span className="votes">127 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-2.jpg" alt="Bourbon Glazed Ribs" />
                  </div>
                  <div className="dish-content">
                    <h4>Bourbon Glazed Ribs</h4>
                    <p>St. Louis-style ribs slow-smoked and finished with our signature bourbon glaze</p>
                    <div className="vote-section">
                      <span className="votes">89 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 secret-dish">
                <div className="dish-card">
                  <div className="dish-image">
                    <img src="/images/resource/shop/shop-3.jpg" alt="Elote Stuffed Peppers" />
                  </div>
                  <div className="dish-content">
                    <h4>Elote Stuffed Peppers</h4>
                    <p>Mexican street corn flavors stuffed into sweet peppers and grilled to perfection</p>
                    <div className="vote-section">
                      <span className="votes">156 votes</span>
                      <button className="vote-btn">Vote for Next Meet-Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-section">
            <div className="signup-card">
              <h3>Want to Vote & Get Exclusive Access?</h3>
              <p>Sign up now to vote for secret menu items and be the first to know about upcoming Ranch Meet-Ups!</p>
              <form className="signup-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Your Email" className="form-control" />
                  </div>
                </div>
                <button type="submit" className="theme-btn">Sign Up & Vote</button>
              </form>
              <p className="disclaimer">By signing up, you'll receive updates about meet-ups and exclusive offers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
