import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      console.log('Customer Info:', {
        name: paymentIntent.metadata.customer_name,
        email: paymentIntent.metadata.customer_email,
        phone: paymentIntent.metadata.customer_phone,
        address: paymentIntent.metadata.customer_address,
      });
      console.log('Order Items:', paymentIntent.metadata.order_items);
      console.log('Order Total:', paymentIntent.metadata.order_total);

      // Here you can:
      // 1. Save the order to your database
      // 2. Send confirmation email to customer
      // 3. Send order notification to restaurant
      // 4. Update inventory
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('PaymentIntent failed:', failedPayment.last_payment_error?.message);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
