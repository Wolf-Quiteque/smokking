# Stripe Integration - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### 1. Get Your Stripe Keys

1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_paste_your_key_here
STRIPE_SECRET_KEY=sk_test_paste_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_leave_this_empty_for_now
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Test the Checkout Flow

1. Open http://localhost:3000/menu
2. Add items to cart
3. Click "Checkout"
4. Fill in customer information:
   - Name: Test User
   - Email: test@example.com
   - Phone: 5551234567
   - Address: 123 Test St
5. Click "Continue to Payment"
6. Enter test card: **4242 4242 4242 4242**
7. Expiry: Any future date (e.g., 12/25)
8. CVC: Any 3 digits (e.g., 123)
9. Click "Pay"

### 5. Verify in Stripe Dashboard

Go to https://dashboard.stripe.com/test/payments to see your test payment with all order details!

---

## 📋 What Was Implemented

### ✅ Beautiful Checkout Modal
- Centered Bootstrap modal
- Two-step process: Customer Info → Payment
- Responsive and mobile-friendly
- Professional gradient design

### ✅ Customer Information Form
Collects and validates:
- Full Name (required)
- Email Address (required, validated)
- Phone Number (required, 10 digits)
- Delivery Address (required)

### ✅ Stripe Payment Integration
- Secure Stripe Elements payment form
- Supports all major cards
- Real-time validation
- 3D Secure ready

### ✅ Order Metadata
All order details are sent to your Stripe account:
```json
{
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "5551234567",
  "customer_address": "123 Main St",
  "order_items": "[{...cart items...}]",
  "order_total": "45.99",
  "order_date": "2025-01-07T..."
}
```

### ✅ Payment Success Page
- Confirmation message
- Order ID display
- Contact information
- Navigation options

---

## 🧪 Test Cards

| Card Number | Result |
|------------|--------|
| 4242 4242 4242 4242 | Success |
| 4000 0000 0000 0002 | Decline |
| 4000 0000 0000 9995 | Insufficient funds |

More test cards: https://stripe.com/docs/testing

---

## 🎨 UI Features

### Modal Design
- Gradient orange header matching your brand
- Clean white background
- Smooth animations
- Professional spacing and typography

### Order Summary Section
- Lists all cart items
- Shows quantities and prices
- Displays total prominently
- Scrollable for long orders

### Payment Form
- Stripe's secure embedded form
- Custom styling to match your brand
- Loading states during processing
- Error message handling

### Success Indicators
- Lock icon on payment button
- "Secure payment powered by Stripe" badge
- Success page with checkmark
- Order ID confirmation

---

## 🔒 Security Features

✅ PCI Compliance - Stripe handles all card data
✅ Secure API - Keys stored in environment variables
✅ HTTPS Ready - Works with SSL certificates
✅ Webhook Verification - Optional signature checking
✅ 3D Secure - Automatic when required

---

## 📱 Mobile Responsive

The checkout modal is fully responsive:
- Works on all screen sizes
- Touch-friendly buttons
- Easy-to-read forms
- Optimized for mobile payments

---

## 🎯 Next Steps

### For Testing
1. Test with different card numbers
2. Try invalid email/phone formats
3. Test with empty cart (should show alert)
4. Test on mobile devices

### For Production
1. Read [STRIPE_SETUP.md](./STRIPE_SETUP.md) for detailed instructions
2. Complete Stripe account verification
3. Switch to live API keys
4. Set up production webhooks
5. Test in production mode

---

## 💡 How It Works

```
User Flow:
1. User adds items to cart
2. Clicks "Checkout" button
3. Modal opens with Order Summary
4. User fills customer information form
5. Form validates all fields
6. API creates Stripe Payment Intent with metadata
7. Payment form appears with Stripe Elements
8. User enters card details
9. Stripe processes payment
10. Success page displays with Order ID
11. Cart is cleared
12. Order details are in your Stripe dashboard
```

---

## 🆘 Need Help?

**Common Issues:**

1. **Modal not opening?**
   - Check browser console for errors
   - Ensure cart has items

2. **Payment form not showing?**
   - Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
   - Restart dev server after adding env vars

3. **"Invalid API key" error?**
   - Check keys in `.env.local`
   - Ensure no extra spaces
   - Keys should start with `pk_test_` and `sk_test_`

For detailed setup and troubleshooting, see [STRIPE_SETUP.md](./STRIPE_SETUP.md)

---

## 📞 Support

**Stripe Support:**
- https://support.stripe.com/
- https://stripe.com/docs

**Your Contact Info:**
- Phone: 860-272-9738
- Email: info@kingzsmokeringzbbq.com

---

**Happy Selling! 🎉**
