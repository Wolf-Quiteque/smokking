import { NextResponse } from 'next/server';
import { getSquareClient } from '@/lib/squareClient';

// Helper function to determine category from item name
function determineCategory(itemName) {
  const name = itemName.toLowerCase();

  // Sandwiches
  if (name.includes('sandwich')) {
    return 'sandwiches';
  }

  // Dinners
  if (name.includes('dinner')) {
    return 'dinners';
  }

  // Sides
  if (name.includes('potato salad') || name.includes('beans') ||
      name.includes('rice') || name.includes('salad') ||
      name.includes('greens') || name.includes('corn') ||
      name.includes('mac') || name.includes('cheese') && !name.includes('burger')) {
    return 'sides';
  }

  // Drinks
  if (name.includes('pepsi') || name.includes('mtn dew') ||
      name.includes('mountain dew') || name.includes('sierra mist') ||
      name.includes('mug') || name.includes('drink') || name.includes('juice')) {
    return 'drinks';
  }

  // Burgers
  if (name.includes('burger')) {
    return 'burgers';
  }

  // Bowls / Local Favorites
  if (name.includes('bowl') || name.includes('potato') && !name.includes('salad')) {
    return 'local-favorites';
  }

  // Default to meats (ribs, brisket, sausage, chicken, turkey, etc.)
  return 'meats';
}

// Helper function to normalize Square category names to match our menu page categories
function normalizeCategoryName(squareCategoryName) {
  if (!squareCategoryName) return 'meats'; // Default category

  const name = squareCategoryName.toLowerCase();

  // Map Square category names to our menu categories
  if (name.includes('sandwich')) return 'sandwiches';
  if (name.includes('dinner')) return 'dinners';
  if (name.includes('side')) return 'sides';
  if (name.includes('drink') || name.includes('beverage')) return 'drinks';
  if (name.includes('burger')) return 'burgers';
  if (name.includes('bowl') || name.includes('favorite')) return 'local-favorites';
  if (name.includes('meat') || name.includes('rib') || name.includes('brisket') || name.includes('sausage')) return 'meats';

  // If we can't map it, use smart categorization as fallback
  return determineCategory(squareCategoryName);
}

// Helper to turn a Catalog ITEM + VARIATION into what your UI needs
function mapItem(itemObj, variationObj, categoryName = null, imageUrl = null) {
  if (!itemObj) return null;

  const itemData = itemObj.itemData || {};
  const variationData = variationObj?.itemVariationData || {};
  const priceMoney = variationData.priceMoney;

  // Use real category name if available, otherwise fall back to smart categorization
  const category = categoryName
    ? normalizeCategoryName(categoryName)
    : determineCategory(itemData.name || '');

  // Use real image URL if available, otherwise use placeholder
  const image = imageUrl || '/images/menu/shop-1.png';

  return {
    id: variationObj?.id || itemObj.id,
    name: itemData.name || '',
    description: itemData.description || '',
    price: priceMoney ? Number(priceMoney.amount) / 100 : 0,
    priceFormatted: priceMoney
      ? `$${(Number(priceMoney.amount) / 100).toFixed(2)} ${priceMoney.currency}`
      : '$0.00',
    image: image,
    category: category,
    prepTime: 0,
    orderType: 'On Hand',
    squareItemId: itemObj.id,
    squareVariationId: variationObj?.id,
    squareCategoryName: categoryName, // Keep original for debugging
  };
}

export async function GET(request) {
  try {
    const client = getSquareClient();
    const catalogApi = client.catalogApi;

    console.log('Fetching all catalog items from Square with related objects...');
    const { result } = await catalogApi.searchCatalogObjects({
      objectTypes: ['ITEM'],
      includeRelatedObjects: true
    });

    const objects = result.objects || [];
    const relatedObjects = result.relatedObjects || [];

    console.log(`Found ${objects.length} total catalog objects`);
    console.log(`Found ${relatedObjects.length} related objects`);

    // Create lookup maps for categories and images
    const categoryMap = {};
    const imageMap = {};

    relatedObjects.forEach(obj => {
      if (obj.type === 'CATEGORY') {
        categoryMap[obj.id] = obj.categoryData?.name || 'Uncategorized';
      } else if (obj.type === 'IMAGE') {
        imageMap[obj.id] = obj.imageData?.url || null;
      }
    });

    console.log(`Category map has ${Object.keys(categoryMap).length} categories`);
    console.log(`Image map has ${Object.keys(imageMap).length} images`);

    // Get all ITEM objects
    const allItems = objects.filter((o) => o.type === 'ITEM');
    console.log(`Found ${allItems.length} items`);

    // Map each item to our menu format
    const menuItems = allItems
      .map((item) => {
        // Get the first variation (price)
        const firstVariation = item.itemData?.variations?.[0];

        // Get category name from the first category ID
        const firstCategoryId = item.itemData?.categories?.[0]?.id;
        const categoryName = firstCategoryId ? categoryMap[firstCategoryId] : null;

        // Get image URL from the first image ID
        const firstImageId = item.itemData?.imageIds?.[0];
        const imageUrl = firstImageId ? imageMap[firstImageId] : null;

        return mapItem(item, firstVariation, categoryName, imageUrl);
      })
      .filter(Boolean);

    console.log(`\n=== MENU ITEMS BY CATEGORY ===`);
    const byCategory = {};
    menuItems.forEach(item => {
      if (!byCategory[item.category]) {
        byCategory[item.category] = [];
      }
      byCategory[item.category].push(item);
    });

    Object.keys(byCategory).forEach(category => {
      console.log(`${category}: ${byCategory[category].length} items`);
    });

    return NextResponse.json({
      success: true,
      items: menuItems,
      count: menuItems.length,
      categories: Object.keys(byCategory)
    });

  } catch (error) {
    console.error('Error fetching Square menu:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      errors: error.errors
    });

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch menu items',
        details: error.message,
        items: [] // Return empty array so frontend can use fallback
      },
      { status: 500 }
    );
  }
}
