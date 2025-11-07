'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState(null);

  useEffect(() => {
    const paymentIntentId = searchParams.get('payment_intent');
    if (paymentIntentId) {
      setPaymentIntent(paymentIntentId);
    }
  }, [searchParams]);

  return (
    <>
      {/* page-title */}
      <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title.webp)' }}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Payment Successful</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Payment Success</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* success-section */}
      <section className="sec-pad" style={{ padding: '80px 0' }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div style={{
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '40px',
                background: '#fff',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  boxShadow: '0 8px 20px rgba(40, 167, 69, 0.3)'
                }}>
                  <i className="fas fa-check" style={{ fontSize: '50px', color: 'white' }}></i>
                </div>

                <h2 style={{ marginBottom: '20px', color: '#333' }}>
                  Thank You for Your Order!
                </h2>

                <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
                  Your payment has been processed successfully. We've sent a confirmation email with your order details.
                </p>

                {paymentIntent && (
                  <div style={{
                    background: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '30px'
                  }}>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                      Order ID:
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', fontFamily: 'monospace' }}>
                      {paymentIntent}
                    </p>
                  </div>
                )}

                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '30px'
                }}>
                  <p style={{ fontSize: '14px', color: '#856404', margin: 0 }}>
                    <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
                    We'll contact you shortly to confirm your order and discuss delivery details.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="/menu"
                    className="theme-btn"
                    style={{
                      padding: '12px 30px',
                      display: 'inline-block'
                    }}
                  >
                    <i className="fas fa-utensils" style={{ marginRight: '8px' }}></i>
                    Order More
                  </a>
                  <a
                    href="/"
                    className="theme-btn"
                    style={{
                      padding: '12px 30px',
                      display: 'inline-block',
                      background: '#6c757d'
                    }}
                  >
                    <i className="fas fa-home" style={{ marginRight: '8px' }}></i>
                    Go Home
                  </a>
                </div>

                <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #dee2e6' }}>
                  <h5 style={{ marginBottom: '15px', color: '#333' }}>Need Help?</h5>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                    Contact us if you have any questions about your order:
                  </p>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    <p>
                      <i className="fas fa-phone" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                      <a href="tel:8602729738" style={{ color: '#ff6b35' }}>860-272-9738</a>
                    </p>
                    <p>
                      <i className="fas fa-envelope" style={{ marginRight: '8px', color: '#ff6b35' }}></i>
                      <a href="mailto:info@kingzsmokeringzbbq.com" style={{ color: '#ff6b35' }}>
                        info@kingzsmokeringzbbq.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* success-section end */}
    </>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <div>Loading...</div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
