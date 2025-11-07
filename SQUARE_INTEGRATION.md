# Square Integration Guide

## Overview

Your app has been successfully migrated from Stripe to Square for both menu management and payment processing.

## What Changed

### 1. **Menu Data Source**
- **Before**: Hardcoded menu data in [app/menu/page.js](app/menu/page.js)
- **After**: Fetches menu items from Square Catalog API via [app/api/square/menu/route.js](app/api/square/menu/route.js)
- Falls back to hardcoded data if Square API is unavailable

### 2. **Payment Processing**
- **Before**: Stripe payment integration via [lib/CheckoutModal.js](lib/CheckoutModal.js)
- **After**: Square Web Payments SDK via [lib/SquareCheckoutModal.js](lib/SquareCheckoutModal.js)
- Old Stripe modal backed up as `lib/CheckoutModal.stripe.backup.js`

### 3. **Dependencies**
- **Removed**: `@stripe/react-stripe-js`, `@stripe/stripe-js`, `stripe`
- **Added**: `square` SDK

## Configuration

### Environment Variables (`.env.local`)

```env
# Square Access Token (server-side only - KEEP SECRET!)
SQUARE_ACCESS_TOKEN=your_access_token

# Square Application ID (public - used in browser)
NEXT_PUBLIC_SQUARE_APPLICATION_ID=your_app_id

# Square Location ID (your business location)
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_location_id

# Square Environment (sandbox for testing, production for live)
NEXT_PUBLIC_SQUARE_ENVIRONMENT=sandbox
```

**Current Setup**: Using sandbox credentials for testing

## How It Works

### Menu Loading Flow

1. User visits `/menu`
2. Page fetches menu items from `/api/square/menu?menu=BBQ`
3. API connects to Square Catalog API
4. Items are filtered by 'BBQ' category (configurable)
5. Data is transformed to match your menu structure
6. If Square fails, falls back to hardcoded menu data

### Payment Flow

1. User adds items to cart
2. Clicks "Checkout" button
3. **SquareCheckoutModal** opens
4. User enters contact/delivery information
5. Square Web Payments SDK loads card payment form
6. User enters card details
7. Card is tokenized by Square (secure, never touches your server)
8. Token is sent to `/api/square/payment`
9. Server creates payment using Square Payments API
10. Success message shown, cart cleared

## API Routes

### GET `/api/square/menu`
Fetches menu items from Square Catalog

**Query Parameters:**
- `menu` (optional): Menu category name (default: "BBQ")

**Response:**
```json
{
  "success": true,
  "items": [
    {
      "id": "square_item_id",
      "name": "Item Name",
      "price": 25.00,
      "description": "Item description",
      "image": "/images/menu/item.png",
      "category": "meats",
      "squareItemId": "...",
      "squareVariationId": "..."
    }
  ],
  "count": 10
}
```

### POST `/api/square/payment`
Creates a payment using Square Payments API

**Request Body:**
```json
{
  "sourceId": "token_from_square_sdk",
  "amount": 50.00,
  "customerInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "5551234567",
    "address": "123 Main St"
  },
  "cartItems": [...]
}
```

**Response:**
```json
{
  "success": true,
  "payment": {
    "id": "payment_id",
    "status": "COMPLETED",
    "receiptUrl": "https://...",
    "orderId": "order_id"
  }
}
```

## Setting Up Your Square Menu

### Option 1: Use Square Dashboard
1. Log in to [Square Dashboard](https://squareup.com/dashboard)
2. Go to **Items** → **Item Library**
3. Create a category called "BBQ"
4. Add your menu items:
   - Name (e.g., "1 lb. Brisket")
   - Price (in dollars)
   - Description
   - Upload image (optional)
   - Assign to "BBQ" category

### Option 2: Keep Using Hardcoded Menu
The app will automatically fall back to your existing hardcoded menu if:
- Square API is unavailable
- No items are found in Square
- API request fails

## Testing

### Test in Sandbox Mode

1. Make sure `.env.local` has `NEXT_PUBLIC_SQUARE_ENVIRONMENT=sandbox`
2. Start dev server: `npm run dev`
3. Visit `http://localhost:3000/menu`
4. Menu should load (from Square or fallback)
5. Add items to cart
6. Click "Checkout"
7. Fill in customer info
8. Use test card: `4111 1111 1111 1111`
   - Any future expiry date
   - Any CVV (e.g., 123)
   - Any ZIP code (e.g., 12345)

### Test Cards

**Successful Payment:**
- Card: `4111 1111 1111 1111`
- Card: `5105 1051 0510 5100`

**Declined Payment:**
- Card: `4000 0000 0000 0002`

[More test cards](https://developer.squareup.com/docs/testing/test-values)

## Going Live (Production)

### 1. Get Production Credentials
1. Complete Square account verification
2. Go to [Square Developer Dashboard](https://developer.squareup.com/apps)
3. Switch to **Production** tab
4. Copy:
   - Production Access Token
   - Production Application ID
   - Production Location ID

### 2. Update Environment Variables
```env
SQUARE_ACCESS_TOKEN=your_production_token
NEXT_PUBLIC_SQUARE_APPLICATION_ID=your_production_app_id
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_production_location_id
NEXT_PUBLIC_SQUARE_ENVIRONMENT=production
```

### 3. Update Square SDK URL
In [app/layout.js](app/layout.js), change:
```javascript
// FROM (sandbox):
src="https://sandbox.web.squarecdn.com/v1/square.js"

// TO (production):
src="https://web.squarecdn.com/v1/square.js"
```

### 4. Deploy
```bash
npm run build
npm start
```

## Troubleshooting

### Menu Not Loading from Square
- Check Square Dashboard → Items for menu items
- Verify `.env.local` has correct `SQUARE_ACCESS_TOKEN`
- Check browser console for errors
- App will fall back to hardcoded menu automatically

### Payment Form Not Showing
- Verify Square Web Payments SDK is loading (check browser console)
- Check `.env.local` has correct `NEXT_PUBLIC_SQUARE_APPLICATION_ID`
- Ensure `NEXT_PUBLIC_SQUARE_LOCATION_ID` is set

### "Invalid Credentials" Error
- Double-check all credentials in `.env.local`
- Ensure you're using sandbox credentials with sandbox SDK URL
- Restart dev server after changing `.env.local`

### Payment Declined
- Check you're using valid test card numbers in sandbox
- Verify `NEXT_PUBLIC_SQUARE_LOCATION_ID` is correct
- Check Square Dashboard for payment details

## File Structure

```
app/
├── api/
│   └── square/
│       ├── menu/
│       │   └── route.js        # Fetch menu from Square
│       └── payment/
│           └── route.js        # Process payments
├── menu/
│   └── page.js                 # Menu page (updated to fetch from Square)
└── layout.js                   # Updated to use SquareCheckoutModal

lib/
├── SquareCheckoutModal.js      # New Square payment modal
├── CheckoutModal.js            # Old Stripe modal (for reference)
└── CheckoutModal.stripe.backup.js  # Backup of Stripe modal

.env.local                      # Square credentials (git-ignored)
```

## Support

- [Square Developer Documentation](https://developer.squareup.com/docs)
- [Square API Reference](https://developer.squareup.com/reference/square)
- [Square Web Payments SDK](https://developer.squareup.com/docs/web-payments/overview)
- [Square Sandbox Testing](https://developer.squareup.com/docs/testing)

## Security Notes

- ✅ `.env.local` is git-ignored (credentials are safe)
- ✅ Access token is server-side only (never sent to browser)
- ✅ Card details are tokenized by Square (never touch your server)
- ✅ All payments use HTTPS
- ⚠️ Never commit `.env.local` to version control
- ⚠️ Use different credentials for sandbox and production

---

**Migration completed successfully!** 🎉

Your app now uses Square for both menu management and payment processing.
