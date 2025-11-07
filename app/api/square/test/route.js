import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({
    envLoaded: {
      hasAccessToken: !!process.env.SQUARE_ACCESS_TOKEN,
      hasAppId: !!process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,
      hasLocationId: !!process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
      environment: process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT || 'not set',
      accessTokenLength: process.env.SQUARE_ACCESS_TOKEN?.length || 0
    }
  });
}
