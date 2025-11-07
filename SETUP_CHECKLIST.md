# Stripe Integration Setup Checklist

Use this checklist to get your payment system up and running!

## 🚦 Before You Start

- [ ] You have a Stripe account (create one at https://stripe.com)
- [ ] You have access to your Stripe Dashboard
- [ ] Your development environment is running (Node.js installed)

---

## ✅ Step-by-Step Checklist

### 1️⃣ Get Stripe API Keys

- [ ] Go to https://dashboard.stripe.com/test/apikeys
- [ ] Copy your **Publishable key** (starts with `pk_test_`)
- [ ] Copy your **Secret key** (click "Reveal test key", starts with `sk_test_`)
- [ ] Keep these keys handy for the next step

### 2️⃣ Set Up Environment Variables

- [ ] Copy the example file:
  ```bash
  cp .env.local.example .env.local
  ```
- [ ] Open `.env.local` in your editor
- [ ] Paste your Publishable key after `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=`
- [ ] Paste your Secret key after `STRIPE_SECRET_KEY=`
- [ ] Save the file
- [ ] **IMPORTANT:** Never commit `.env.local` to Git!

Your `.env.local` should look like:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_abc123...
STRIPE_SECRET_KEY=sk_test_xyz789...
STRIPE_WEBHOOK_SECRET=
```

### 3️⃣ Start Your Development Server

- [ ] Install dependencies (if not already done):
  ```bash
  npm install
  ```
- [ ] Start the server:
  ```bash
  npm run dev
  ```
- [ ] Verify server is running at http://localhost:3000
- [ ] Check console for any errors

### 4️⃣ Test the Checkout Flow

- [ ] Open http://localhost:3000/menu in your browser
- [ ] Add at least one item to cart
- [ ] Click the cart icon (top right)
- [ ] Verify cart sidebar opens with your items
- [ ] Click the **"Checkout"** button

### 5️⃣ Test Customer Information Form

- [ ] Modal should open in the center of screen
- [ ] Fill in the form:
  - **Name:** Test User
  - **Email:** test@example.com
  - **Phone:** 5551234567
  - **Address:** 123 Test Street, City, ST 12345
- [ ] Click **"Continue to Payment"**
- [ ] Verify no validation errors appear

### 6️⃣ Test Payment Form

- [ ] Payment form should appear (powered by Stripe)
- [ ] Enter test card details:
  - **Card Number:** 4242 4242 4242 4242
  - **Expiry:** 12/25 (any future date)
  - **CVC:** 123 (any 3 digits)
  - **ZIP:** 12345
- [ ] Click **"Pay $XX.XX"** button
- [ ] Wait for processing (usually 2-3 seconds)

### 7️⃣ Verify Success

- [ ] Success alert should appear with Order ID
- [ ] Modal should close
- [ ] Cart should be empty
- [ ] Items in cart counter should show 0

### 8️⃣ Check Stripe Dashboard

- [ ] Go to https://dashboard.stripe.com/test/payments
- [ ] Find your test payment (should be at the top)
- [ ] Click on the payment to view details
- [ ] Verify metadata includes:
  - [ ] Customer name
  - [ ] Customer email
  - [ ] Customer phone
  - [ ] Customer address
  - [ ] Order items (in JSON format)
  - [ ] Order total
  - [ ] Order date

### 9️⃣ Test Error Handling

- [ ] Try checking out with empty form (should show errors)
- [ ] Try invalid email format (should show error)
- [ ] Try invalid phone number (should show error)
- [ ] Try test card `4000 0000 0000 0002` (should decline)
- [ ] Verify error messages appear correctly

### 🔟 Test on Mobile

- [ ] Open site on mobile device or use browser dev tools
- [ ] Test entire checkout flow on mobile
- [ ] Verify modal is responsive
- [ ] Verify forms are easy to fill on mobile
- [ ] Verify payment form works on mobile

---

## 🎉 Testing Complete!

If all checkboxes are checked, your Stripe integration is working perfectly in test mode!

---

## 🚀 Ready for Production?

When you're ready to accept real payments, follow the [Production Checklist](#production-checklist) below.

---

## 📋 Production Checklist

### Before Going Live

- [ ] Complete Stripe account verification
  - [ ] Business details submitted
  - [ ] Bank account connected
  - [ ] Identity verification complete
- [ ] Account approved for live payments
- [ ] Tested thoroughly in test mode

### Switching to Live Mode

- [ ] Get live API keys from https://dashboard.stripe.com/apikeys
- [ ] Update `.env.local` with live keys:
  - Replace `pk_test_` with `pk_live_`
  - Replace `sk_test_` with `sk_live_`
- [ ] Deploy to production server
- [ ] Update environment variables on production:
  - [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (live)
  - [ ] `STRIPE_SECRET_KEY` (live)

### Set Up Production Webhooks

- [ ] Go to https://dashboard.stripe.com/webhooks
- [ ] Click "Add endpoint"
- [ ] Enter production URL: `https://yourdomain.com/api/stripe-webhook`
- [ ] Select events:
  - [ ] `payment_intent.succeeded`
  - [ ] `payment_intent.payment_failed`
- [ ] Copy webhook signing secret
- [ ] Add to production environment: `STRIPE_WEBHOOK_SECRET`

### Final Testing

- [ ] Test checkout on production with real card (small amount)
- [ ] Verify payment appears in Stripe Dashboard (live mode)
- [ ] Verify webhook receives event
- [ ] Verify metadata is correct
- [ ] Test refund process
- [ ] Set up email alerts for failed payments

### Security

- [ ] HTTPS enabled on production (required by Stripe)
- [ ] Environment variables secured
- [ ] API keys not exposed in frontend code
- [ ] `.env.local` not committed to Git
- [ ] Regular monitoring of Stripe Dashboard

---

## ❓ Troubleshooting

### Problem: Modal doesn't open
**Solution:**
- Check browser console for errors
- Verify cart has items
- Try refreshing the page

### Problem: "Invalid API Key" error
**Solution:**
- Check `.env.local` file exists
- Verify keys are copied correctly (no extra spaces)
- Restart development server after changing `.env.local`
- Ensure publishable key starts with `NEXT_PUBLIC_`

### Problem: Payment form doesn't appear
**Solution:**
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Check browser console for errors
- Make sure you clicked "Continue to Payment"
- Verify customer info form was filled correctly

### Problem: Payment fails with test card
**Solution:**
- Use exactly: 4242 4242 4242 4242
- Use future expiry date
- Use any 3-digit CVC
- Try in test mode first

### Problem: Metadata not showing in Stripe
**Solution:**
- Check browser network tab for API errors
- Verify `.env.local` has `STRIPE_SECRET_KEY`
- Check server console logs
- Verify API route is accessible

---

## 📞 Need Help?

**Documentation:**
- [Quick Start Guide](./STRIPE_QUICKSTART.md)
- [Detailed Setup](./STRIPE_SETUP.md)
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md)

**Stripe Resources:**
- [Stripe Documentation](https://stripe.com/docs)
- [Testing Guide](https://stripe.com/docs/testing)
- [Stripe Support](https://support.stripe.com/)

**Contact:**
- Email: info@kingzsmokeringzbbq.com
- Phone: 860-272-9738

---

## 🎯 Quick Reference

### Test Card Numbers

| Card | Result |
|------|--------|
| 4242 4242 4242 4242 | ✅ Success |
| 4000 0000 0000 0002 | ❌ Decline |
| 4000 0000 0000 9995 | ❌ Insufficient funds |

### Important URLs

- **Test Dashboard:** https://dashboard.stripe.com/test/payments
- **Test API Keys:** https://dashboard.stripe.com/test/apikeys
- **Live Dashboard:** https://dashboard.stripe.com/payments
- **Live API Keys:** https://dashboard.stripe.com/apikeys
- **Webhooks:** https://dashboard.stripe.com/webhooks
- **Testing Docs:** https://stripe.com/docs/testing

---

**Happy Selling! 🍖🔥**
