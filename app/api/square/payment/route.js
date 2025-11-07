import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { getSquareClient } from '@/lib/squareClient';

export async function POST(request) {
  try {
    const body = await request.json();
    const { sourceId, amount, customerInfo, cartItems } = body;

    // Validate required fields
    if (!sourceId || !amount || !customerInfo) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if credentials are configured
    if (!process.env.SQUARE_ACCESS_TOKEN || !process.env.SQUARE_LOCATION_ID) {
      console.error('Square credentials not configured');
      return NextResponse.json(
        { success: false, error: 'Payment system is not configured' },
        { status: 500 }
      );
    }

    // Initialize Square client
    const client = getSquareClient();

    // Convert amount to cents (Square uses smallest currency unit)
    const amountInCents = Math.round(amount * 100);

    // Generate idempotency key to prevent duplicate charges
    const idempotencyKey = randomUUID();

    // Create line items for the order
    const lineItems = cartItems.map(item => ({
      name: item.name,
      quantity: item.quantity.toString(),
      basePriceMoney: {
        amount: Math.round(item.price * 100), // Convert to cents
        currency: 'USD',
      },
    }));

    // Create the payment
    const paymentResponse = await client.paymentsApi.createPayment({
      sourceId,
      idempotencyKey,
      amountMoney: {
        amount: amountInCents,
        currency: 'USD',
      },
      locationId: process.env.SQUARE_LOCATION_ID,
      note: `Order from ${customerInfo.name || 'Customer'}`,
      buyerEmailAddress: customerInfo.email,
      billingAddress: customerInfo.address ? {
        addressLine1: customerInfo.address,
      } : undefined,
    });

    const payment = paymentResponse.result.payment;

    // Optionally create an order in Square for better tracking
    try {
      const orderResponse = await client.ordersApi.createOrder({
        order: {
          locationId: process.env.SQUARE_LOCATION_ID,
          lineItems,
          state: 'COMPLETED',
          metadata: {
            customerName: customerInfo.name,
            customerEmail: customerInfo.email,
            customerPhone: customerInfo.phone,
          },
        },
        idempotencyKey: randomUUID(),
      });

      console.log('Order created:', orderResponse.result.order.id);
    } catch (orderError) {
      console.warn('Could not create order:', orderError);
      // Don't fail the payment if order creation fails
    }

    return NextResponse.json({
      success: true,
      payment: {
        id: payment.id,
        status: payment.status,
        receiptUrl: payment.receiptUrl,
        orderId: payment.orderId,
      },
    });

  } catch (error) {
    console.error('Square payment error:', error);

    // Extract meaningful error message
    let errorMessage = 'Payment processing failed';
    if (error.errors && error.errors.length > 0) {
      errorMessage = error.errors[0].detail || errorMessage;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: error.errors || [{ detail: error.message }],
      },
      { status: 500 }
    );
  }
}
