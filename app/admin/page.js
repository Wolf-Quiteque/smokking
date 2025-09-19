export default function Admin() {
  return (
    <div className="admin-page">
      <section className="page-title bg-color-1">
        <div className="auto-container">
          <div className="content-box centred">
            <h1>Admin Dashboard</h1>
            <p>Manage your King Smoke Ringz website</p>
          </div>
        </div>
      </section>

      <section className="admin-section bg-color-3">
        <div className="auto-container">
          <div className="admin-login">
            <h2>Admin Login</h2>
            <form className="login-form">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="theme-btn">Login</button>
            </form>
          </div>

          <div className="admin-features">
            <h3>Admin Features</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="admin-feature">
                  <i className="flaticon-menu"></i>
                  <h4>Manage Menu</h4>
                  <p>Update menu items, prices, and descriptions</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="admin-feature">
                  <i className="flaticon-promotion"></i>
                  <h4>Manage Promotions</h4>
                  <p>Create and edit special offers</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="admin-feature">
                  <i className="flaticon-calendar"></i>
                  <h4>Manage Events</h4>
                  <p>Schedule and update upcoming events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
