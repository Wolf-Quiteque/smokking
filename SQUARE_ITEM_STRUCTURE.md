# Square Catalog Item Structure

## First Item Example: "Rib Sandwich"

```json
{
  "type": "ITEM",
  "id": "J5GKMFSA53D3TVS3U4JJRDEG",
  "updatedAt": "2025-10-21T09:08:55.855Z",
  "version": "1761037735855",
  "isDeleted": false,
  "presentAtAllLocations": true,
  "itemData": {
    "name": "Rib Sandwich",
    "isTaxable": true,
    "taxIds": ["UDSCND7OLBFQJCUMYJ5J7LY5"],
    "modifierListInfo": [
      {
        "modifierListId": "66RJADKJUPTDFY3DICNWKEV3",
        "minSelectedModifiers": -1,
        "maxSelectedModifiers": -1,
        "enabled": true,
        "ordinal": 1
      }
    ],
    "variations": [
      {
        "type": "ITEM_VARIATION",
        "id": "QP36OIRN5AIKEKZEAOTQJFA3",
        "updatedAt": "2025-08-05T21:15:02.876Z",
        "version": "1754428502876",
        "isDeleted": false,
        "presentAtAllLocations": true,
        "itemVariationData": {
          "itemId": "J5GKMFSA53D3TVS3U4JJRDEG",
          "name": "Regular",
          "ordinal": 1,
          "pricingType": "FIXED_PRICING",
          "priceMoney": {
            "amount": "1300",
            "currency": "USD"
          },
          "trackInventory": false,
          "sellable": true,
          "stockable": true
        }
      }
    ],
    "productType": "FOOD_AND_BEV",
    "skipModifierScreen": false,
    "imageIds": ["YLEM6BKR4WTGYMMN45XSGVMQ"],
    "categories": [
      {
        "id": "Q2X5LOXOVKFW5GBRN3VIK7DW",
        "ordinal": "-2249188473569280"
      },
      {
        "id": "WXRFFTH36HRHZQXOJ4IGZP5F",
        "ordinal": "2251662374731775"
      },
      {
        "id": "7YDOVHKJGU7FH27T7KSVHB3R",
        "ordinal": "0"
      },
      {
        "id": "N7RSS7OA4FKBPUP67FDOGK3F",
        "ordinal": "2251662374731775"
      }
    ],
    "channels": [
      "CH_izBNIiogY3kMz8Rdv4sXC3HTPEUR4tv3gOofYRlQuYC",
      "CH_Xfl65vsEwDB4kvimIt6ay6mOnqlyMngt8IORmTR29945o"
    ],
    "isArchived": false,
    "reportingCategory": {
      "id": "Q2X5LOXOVKFW5GBRN3VIK7DW",
      "ordinal": "-2249188473569280"
    }
  }
}
```

## Key Fields for Menu Display

### Item Information
- **name**: "Rib Sandwich" - Display name
- **description**: (not present in this item, but available in some items)
- **id**: "J5GKMFSA53D3TVS3U4JJRDEG" - Unique item identifier

### Price Information (from variations[0])
- **variations**: Array of pricing options
  - **itemVariationData.priceMoney.amount**: "1300" (in cents, so $13.00)
  - **itemVariationData.priceMoney.currency**: "USD"
  - **id**: "QP36OIRN5AIKEKZEAOTQJFA3" - Variation ID (use this for cart)

### Images
- **imageIds**: ["YLEM6BKR4WTGYMMN45XSGVMQ"]
  - These would need to be fetched separately or use placeholder

### Categories
- **categories**: Array of category objects with IDs
  - Each has an `id` and `ordinal` (for sorting)
- **reportingCategory**: Primary category for this item
  - `id`: "Q2X5LOXOVKFW5GBRN3VIK7DW"

## Mapping to Menu Page Structure

```javascript
{
  "id": "QP36OIRN5AIKEKZEAOTQJFA3",  // variation ID
  "name": "Rib Sandwich",             // itemData.name
  "description": "",                   // itemData.description (if exists)
  "price": 13,                         // variations[0].itemVariationData.priceMoney.amount / 100
  "priceFormatted": "$13.00 USD",     // formatted price
  "image": "/images/menu/shop-1.png", // default placeholder (imageIds would need separate fetch)
  "category": "sandwiches",            // determined from category IDs
  "prepTime": 0,                       // would need custom metadata
  "orderType": "On Hand",              // would need custom metadata
  "squareItemId": "J5GKMFSA53D3TVS3U4JJRDEG",     // item id
  "squareVariationId": "QP36OIRN5AIKEKZEAOTQJFA3" // variation id
}
```

## Category IDs Found
The item has 4 category IDs. We need to fetch CATEGORY objects to map these IDs to readable names like "Sandwiches", "Dinners", etc.
