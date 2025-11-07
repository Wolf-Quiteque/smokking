# Kingz Smoke Ringz BBQ Website

A Next.js-powered BBQ restaurant website with online ordering and Stripe payment integration.

## Features

- Full menu with categories (Lunch Specials, Meats, Dinners, Sandwiches, Baked Potatoes, Sides, Drinks)
- Shopping cart with real-time updates
- Secure checkout with Stripe payment processing
- Customer information collection
- Order metadata tracking
- Mobile-responsive design
- Catering and Events pages

## Payment Integration

This project includes a complete Stripe integration for secure online payments:
- **Quick Start:** See [STRIPE_QUICKSTART.md](./STRIPE_QUICKSTART.md) to test in 5 minutes
- **Full Setup:** See [STRIPE_SETUP.md](./STRIPE_SETUP.md) for production deployment

## Getting Started

First, set up your environment variables (required for payment processing):

```bash
cp .env.local.example .env.local
# Edit .env.local and add your Stripe API keys
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
