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
4. **Missing NEXT_PUBLIC_ Prefix**: The Square SDK runs in the browser and requires environment variables with the `NEXT_PUBLIC_` prefix to be accessible client-side

## Fixes Applied

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

Open the `.env.local` file in the root of your project and replace the placeholder values:

```bash
# Server-side credentials
SQUARE_ACCESS_TOKEN=YOUR_SANDBOX_ACCESS_TOKEN_HERE
SQUARE_ENVIRONMENT=sandbox
SQUARE_LOCATION_ID=YOUR_LOCATION_ID_HERE

# Client-side credentials (safe to expose in browser)
NEXT_PUBLIC_SQUARE_APPLICATION_ID=YOUR_SANDBOX_APPLICATION_ID_HERE
NEXT_PUBLIC_SQUARE_LOCATION_ID=YOUR_LOCATION_ID_HERE
```

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
   # Server-side (no NEXT_PUBLIC_ prefix)
   SQUARE_ACCESS_TOKEN=YOUR_PRODUCTION_ACCESS_TOKEN
   SQUARE_ENVIRONMENT=production
   SQUARE_LOCATION_ID=YOUR_PRODUCTION_LOCATION_ID

   # Client-side (with NEXT_PUBLIC_ prefix)
   NEXT_PUBLIC_SQUARE_APPLICATION_ID=YOUR_PRODUCTION_APPLICATION_ID
   NEXT_PUBLIC_SQUARE_LOCATION_ID=YOUR_PRODUCTION_LOCATION_ID
   NEXT_PUBLIC_SQUARE_ENVIRONMENT=production
   ```
3. **Important**: Make sure `SQUARE_ENVIRONMENT` and `NEXT_PUBLIC_SQUARE_ENVIRONMENT` match!
4. Restart your development server
5. The Square SDK URL will automatically switch to production mode

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
⚠️ **NEVER** use `NEXT_PUBLIC_` prefix for access tokens
✅ Only use `NEXT_PUBLIC_` for Application ID, Location ID, and Environment
✅ Keep access tokens server-side only

### Why NEXT_PUBLIC_ Prefix is Required

**Important**: The Square Web Payments SDK runs entirely in the browser (client-side). Next.js has two types of environment variables:

1. **Server-side only** (no prefix): Only available in API routes and server components
2. **Client-side** (with `NEXT_PUBLIC_` prefix): Available in the browser

Since Square SDK initializes in the browser, it **MUST** use `NEXT_PUBLIC_` prefixed variables:

```javascript
// This runs in the browser - requires NEXT_PUBLIC_ prefix
window.Square.payments(
  process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,  // ✅ Works in browser
  process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID      // ✅ Works in browser
);
```

**Without** the `NEXT_PUBLIC_` prefix, these values will be `undefined` in the browser and Square checkout will fail.

**Safe to expose** (use NEXT_PUBLIC_):
- Application ID (public identifier)
- Location ID (public identifier)
- Environment (sandbox/production)

**Keep secret** (NO NEXT_PUBLIC_):
- Access Token (server-side only, never expose to browser)

## Need Help?

- [Square Web Payments SDK Documentation](https://developer.squareup.com/docs/web-payments/overview)
- [Square Developer Forums](https://developer.squareup.com/forums)
- [Square API Reference](https://developer.squareup.com/reference/square)

## File Changes Made

- `lib/SquareCheckoutModal.js` - Added credential validation and better error handling
- `app/layout.js` - Fixed Square SDK loading
- `.env.local` - Created with setup instructions
- `SQUARE_SETUP.md` - This setup guide
