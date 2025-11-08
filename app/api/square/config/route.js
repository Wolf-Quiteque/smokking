import { NextResponse } from 'next/server';

/**
 * API endpoint to provide public Square configuration to the browser
 * This allows us to keep environment variables server-side without NEXT_PUBLIC_ prefix
 */
export async function GET() {
  try {
    const appId = process.env.SQUARE_APPLICATION_ID;
    const locationId = process.env.SQUARE_LOCATION_ID;
    const environment = process.env.SQUARE_ENVIRONMENT || 'sandbox';

    // Validate that credentials are configured
    if (!appId || !locationId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Square credentials not configured on server'
        },
        { status: 500 }
      );
    }

    // Check for placeholder values
    if (appId.includes('your_') || locationId.includes('your_')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Square credentials are still using placeholder values'
        },
        { status: 500 }
      );
    }

    // Return only the public credentials (safe to expose to browser)
    // Application ID and Location ID are public identifiers
    return NextResponse.json({
      success: true,
      applicationId: appId,
      locationId: locationId,
      environment: environment,
    });

  } catch (error) {
    console.error('Error fetching Square config:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to load payment configuration'
      },
      { status: 500 }
    );
  }
}
