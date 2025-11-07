import { NextResponse } from 'next/server';
import { getSquareClient } from '@/lib/squareClient';

// Helper function to convert BigInt to string for JSON serialization
function convertBigIntsToStrings(obj) {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'bigint') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    return obj.map(convertBigIntsToStrings);
  }

  if (typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = convertBigIntsToStrings(obj[key]);
    }
    return newObj;
  }

  return obj;
}

export async function GET(request) {
  try {
    const client = getSquareClient();
    const catalogApi = client.catalogApi;

    console.log('Fetching all catalog objects from Square...');
    const { result } = await catalogApi.listCatalog();

    // Get all objects
    const objects = result.objects || [];

    // Create a map of all objects by ID for quick lookup
    const objectMap = {};
    objects.forEach(obj => {
      objectMap[obj.id] = obj;
    });

    // Find the first ITEM type object
    const firstItem = objects.find(obj => obj.type === 'ITEM');

    if (!firstItem) {
      return NextResponse.json({
        success: false,
        error: 'No ITEM found in catalog'
      });
    }

    // Get category information
    const categoryInfo = [];
    if (firstItem.itemData?.categories) {
      firstItem.itemData.categories.forEach(cat => {
        const categoryObj = objectMap[cat.id];
        if (categoryObj && categoryObj.type === 'CATEGORY') {
          categoryInfo.push({
            id: cat.id,
            name: categoryObj.categoryData?.name || 'Unknown',
            ordinal: cat.ordinal
          });
        }
      });
    }

    // Get image information
    const imageInfo = [];
    if (firstItem.itemData?.imageIds) {
      firstItem.itemData.imageIds.forEach(imageId => {
        const imageObj = objectMap[imageId];
        if (imageObj && imageObj.type === 'IMAGE') {
          imageInfo.push({
            id: imageId,
            url: imageObj.imageData?.url || null,
            name: imageObj.imageData?.name || 'Unknown',
            caption: imageObj.imageData?.caption || null
          });
        }
      });
    }

    // Convert BigInts to strings for JSON serialization
    const serializedFirstItem = convertBigIntsToStrings(firstItem);

    // Return detailed information
    return NextResponse.json({
      success: true,
      totalObjects: objects.length,
      firstItem: serializedFirstItem,
      categoryInfo: categoryInfo,
      imageInfo: imageInfo,
      objectTypeCounts: {
        ITEM: objects.filter(o => o.type === 'ITEM').length,
        CATEGORY: objects.filter(o => o.type === 'CATEGORY').length,
        IMAGE: objects.filter(o => o.type === 'IMAGE').length,
        ITEM_VARIATION: objects.filter(o => o.type === 'ITEM_VARIATION').length,
        OTHER: objects.filter(o => !['ITEM', 'CATEGORY', 'IMAGE', 'ITEM_VARIATION'].includes(o.type)).length
      }
    });

  } catch (error) {
    console.error('Error fetching Square catalog:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch catalog',
        details: error.message
      },
      { status: 500 }
    );
  }
}
