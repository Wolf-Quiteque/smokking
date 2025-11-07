# Stripe Integration Setup Guide

This guide will help you set up Stripe payment processing for Kingz Smoke Ringz BBQ.

## Prerequisites

- A Stripe account (sign up at https://stripe.com)
- Node.js and npm installed
- Your Stripe API keys

## Step 1: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard: https://dashboard.stripe.com
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
   - **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Stripe keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   STRIPE_SECRET_KEY=sk_test_your_actual_key_here
   ```

3. **Important:** Never commit `.env.local` to version control!

## Step 3: Set Up Stripe Webhooks (Optional but Recommended)

Webhooks allow you to receive real-time notifications when payments succeed or fail.

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Enter your webhook URL: `https://yourdomain.com/api/stripe-webhook`
4. Select events to listen to:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to your `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_signing_secret_here
   ```

### Testing Webhooks Locally

To test webhooks on your local machine:

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Log in to Stripe CLI:
   ```bash
   stripe login
   ```
3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe-webhook
   ```
4. The CLI will display a webhook signing secret - add this to your `.env.local`

## Step 4: Test the Integration

### Test Mode

Start with test mode to ensure everything works:

1. Use test card numbers (from https://stripe.com/docs/testing):
   - **Success:** `4242 4242 4242 4242`
   - **Decline:** `4000 0000 0000 0002`
   - Use any future expiry date, any 3-digit CVC, and any postal code

2. Start your development server:
   ```bash
   npm run dev
   ```

3. Navigate to the menu and add items to your cart
4. Click checkout and fill in the customer information form
5. Enter the test card details
6. Complete the payment

### Verify Test Payments

1. Go to https://dashboard.stripe.com/test/payments
2. You should see your test payment with all the metadata:
   - Customer name
   - Customer email
   - Customer phone
   - Customer address
   - Order items
   - Order total

## Step 5: Go Live

When you're ready to accept real payments:

1. Complete your Stripe account setup:
   - Verify your business details
   - Connect your bank account
   - Enable your account for live payments

2. Switch to live mode keys:
   - Get your live API keys from https://dashboard.stripe.com/apikeys
   - Update `.env.local` with live keys (use `pk_live_` and `sk_live_`)

3. Update your webhook endpoint:
   - Create a production webhook at https://dashboard.stripe.com/webhooks
   - Use your production URL: `https://yourdomain.com/api/stripe-webhook`
   - Update `STRIPE_WEBHOOK_SECRET` in your production environment

## Features Included

✅ **Secure Payment Processing**
- PCI-compliant payment form
- Supports all major credit/debit cards
- 3D Secure authentication when required

✅ **Beautiful UI/UX**
- Bootstrap modal checkout flow
- Responsive design
- Mobile-friendly

✅ **Customer Information Collection**
- Name
- Email
- Phone number
- Delivery address

✅ **Order Metadata**
All order details are sent to Stripe for your records:
- Customer information
- Complete order items list
- Order total
- Order timestamp

✅ **Payment Confirmation**
- Success page after payment
- Order ID display
- Email notification (via Stripe)

## Troubleshooting

### "Invalid API Key" Error
- Double-check your API keys in `.env.local`
- Ensure keys start with `pk_test_` and `sk_test_` (or `pk_live_`/`sk_live_` for production)
- Restart your development server after changing environment variables

### Payment Form Not Showing
- Check browser console for errors
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly
- Ensure it starts with `NEXT_PUBLIC_` (required for client-side access)

### Webhook Signature Verification Failed
- Ensure `STRIPE_WEBHOOK_SECRET` matches the secret from your webhook endpoint
- If testing locally, use the secret from Stripe CLI

### Payment Succeeds but No Confirmation
- Check your webhook endpoint is receiving events
- Look at webhook logs in Stripe Dashboard
- Verify webhook secret is correct

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## Security Best Practices

1. **Never expose secret keys:**
   - Only `NEXT_PUBLIC_*` variables are exposed to the browser
   - Keep `STRIPE_SECRET_KEY` server-side only

2. **Use environment variables:**
   - Never hardcode API keys in your code
   - Use different keys for development and production

3. **Verify webhook signatures:**
   - Always verify webhook signatures to ensure events come from Stripe

4. **Enable HTTPS in production:**
   - Stripe requires HTTPS for webhooks in production

5. **Monitor your Stripe Dashboard:**
   - Regularly check for unusual activity
   - Set up email alerts for failed payments

## Support

For issues specific to this integration, contact your development team.

For Stripe-related questions, visit:
- [Stripe Support](https://support.stripe.com/)
- [Stripe Community](https://stripe.com/community)
