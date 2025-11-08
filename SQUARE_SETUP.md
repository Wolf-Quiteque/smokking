# Square Payment Integration Setup Guide

## Current Status
✅ Square Web Payments SDK integration is configured
✅ Checkout modal and payment flow are implemented
⚠️ **Action Required:** You need to add your Square credentials

## Why Checkout Wasn't Working

The checkout buttons were not working due to:

1. **Missing Square Credentials**: Environment variables were set to placeholder values
2. **SDK Initialization Failures**: Square SDK couldn't initialize without valid credentials
3. **No Error Feedback**: Users weren't seeing helpful error messages

## Fixes Applied

✅ Created server-side API endpoint to provide Square credentials to browser
✅ All environment variables now server-side only (no NEXT_PUBLIC_ prefix needed)
✅ Added credential validation before Square SDK initialization
✅ Improved error messages for missing/invalid credentials
✅ Fixed Square SDK loading with Next.js Script component
✅ Removed non-functional JSX script tag
✅ Enhanced error display in checkout modal

## How to Complete Setup

### Step 1: Get Your Square Credentials

1. Go to [Square Developer Dashboard](https://developer.squareup.com/apps)
2. Sign in or create a Square developer account
3. Create a new application or select an existing one
4. Navigate to the **Credentials** tab

### Step 2: Get Your Sandbox Credentials (for testing)

You'll need these values:
- **Sandbox Application ID** - Found under "Sandbox" section
- **Sandbox Access Token** - Found under "Sandbox" section
- **Location ID** - Found in "Locations" tab or via API

### Step 3: Update `.env.local`

Open the `.env.local` file in the root of your project and replace the placeholder values.

**All variables are server-side only (no NEXT_PUBLIC_ prefix)**:

```bash
# Square credentials (all server-side)
SQUARE_ACCESS_TOKEN=YOUR_SANDBOX_ACCESS_TOKEN_HERE
SQUARE_APPLICATION_ID=YOUR_SANDBOX_APPLICATION_ID_HERE
SQUARE_LOCATION_ID=YOUR_LOCATION_ID_HERE
SQUARE_ENVIRONMENT=sandbox
```

The application automatically exposes only the public credentials (Application ID and Location ID) to the browser via a secure API endpoint.

### Step 4: Restart Your Development Server

After updating the credentials:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Testing the Checkout Flow

1. Add items to your cart
2. Click the "Checkout" button (either in cart sidebar or the floating cart button)
3. Fill in customer information
4. Click "Continue to Payment"
5. Enter test card details:
   - **Card Number**: `4111 1111 1111 1111` (Visa)
   - **Expiration**: Any future date
   - **CVV**: Any 3 digits
   - **Postal Code**: Any valid postal code

6. Click "Pay" to process the payment

## Square Test Card Numbers

For sandbox testing, use these test cards:

- **Visa**: `4111 1111 1111 1111`
- **Mastercard**: `5105 1051 0510 5100`
- **Amex**: `3782 822463 10005`
- **Discover**: `6011 1111 1111 1117`

All test cards work with:
- Any future expiration date
- Any 3-digit CVV (4 digits for Amex)
- Any postal code

## Switching to Production

When ready to accept real payments:

1. Get your **Production** credentials from Square Developer Dashboard
2. Update **ALL** environment variables in `.env.local`:
   ```bash
   SQUARE_ACCESS_TOKEN=YOUR_PRODUCTION_ACCESS_TOKEN
   SQUARE_APPLICATION_ID=YOUR_PRODUCTION_APPLICATION_ID
   SQUARE_LOCATION_ID=YOUR_PRODUCTION_LOCATION_ID
   SQUARE_ENVIRONMENT=production
   ```
3. Restart your server
4. The Square SDK will automatically switch to production mode

## Troubleshooting

### Checkout button doesn't respond
- **Check**: Browser console for errors
- **Solution**: Verify Square credentials are set correctly

### "Payment system is not configured" error
- **Cause**: Environment variables not set or still using placeholder values
- **Solution**: Update `.env.local` with real Square credentials

### "Payment system failed to load"
- **Cause**: Square SDK failed to load
- **Solution**: Check your internet connection and verify the SDK URL is accessible

### Payment fails with invalid credentials
- **Cause**: Using production credentials in sandbox mode (or vice versa)
- **Solution**: Ensure `SQUARE_ENVIRONMENT` matches your credential type

## Security Notes

⚠️ **NEVER** commit `.env.local` to version control
✅ All environment variables are server-side only (no NEXT_PUBLIC_ prefix)
✅ Access tokens are kept private on the server
✅ Only public identifiers (Application ID, Location ID) are exposed to browser

### How It Works (No NEXT_PUBLIC_ Prefix Needed)

This application uses a server-side API endpoint approach to keep all environment variables private:

1. **All credentials stay on the server** - No NEXT_PUBLIC_ prefix needed
2. **API endpoint exposes only public data** - `/api/square/config` provides Application ID and Location ID
3. **Access tokens stay private** - Never exposed to the browser
4. **Secure by default** - Browser only receives what it needs

```javascript
// Browser fetches config from server API
const response = await fetch('/api/square/config');
const { applicationId, locationId } = await response.json();

// Then initializes Square SDK with fetched config
window.Square.payments(applicationId, locationId);
```

**Server-side only** (all variables):
- SQUARE_ACCESS_TOKEN (private - never exposed)
- SQUARE_APPLICATION_ID (public identifier - exposed via API)
- SQUARE_LOCATION_ID (public identifier - exposed via API)
- SQUARE_ENVIRONMENT (determines which SDK to load)

## Need Help?

- [Square Web Payments SDK Documentation](https://developer.squareup.com/docs/web-payments/overview)
- [Square Developer Forums](https://developer.squareup.com/forums)
- [Square API Reference](https://developer.squareup.com/reference/square)

## File Changes Made

- `app/api/square/config/route.js` - New API endpoint to provide Square credentials to browser
- `lib/SquareCheckoutModal.js` - Fetches credentials from API, added validation and better error handling
- `app/layout.js` - Fixed Square SDK loading with server-side environment variables
- `.env.local` - Created with setup instructions (no NEXT_PUBLIC_ prefix needed)
- `SQUARE_SETUP.md` - This setup guide

## Architecture

The checkout system now uses a secure server-side approach:

1. **Environment Variables** → All stored on server (no NEXT_PUBLIC_)
2. **API Endpoint** → `/api/square/config` exposes only public credentials
3. **Client Component** → Fetches config and initializes Square SDK
4. **Payment Processing** → `/api/square/payment` handles payment on server
