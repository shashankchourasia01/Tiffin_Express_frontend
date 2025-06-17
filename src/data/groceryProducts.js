// src/data/groceryProducts.js
const groceryProducts = {
    1: [ // Products for Fresh Mart (id:1)
      { id: 101, name: "Fresh Apples", price: 2.99, unit: "per kg", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 102, name: "Organic Bananas", price: 1.49, unit: "per dozen", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 103, name: "Carrots", price: 0.99, unit: "per kg", image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 104, name: "Tomatoes", price: 1.29, unit: "per kg", image: "https://images.unsplash.com/photo-1592841200221-a6895cbfb528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 105, name: "Potatoes", price: 0.79, unit: "per kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 106, name: "Onions", price: 0.89, unit: "per kg", image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 107, name: "Spinach", price: 1.99, unit: "per bunch", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 108, name: "Bell Peppers", price: 1.79, unit: "per kg", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 109, name: "Cucumbers", price: 0.99, unit: "each", image: "https://images.unsplash.com/photo-1604977048617-5ab964a8d1e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { id: 110, name: "Garlic", price: 0.69, unit: "per 100g", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    2: [ // Organic Delight
        { id: 201, name: "Organic Milk", price: 3.49, unit: "1 liter", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 202, name: "Organic Eggs", price: 4.99, unit: "dozen", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 203, name: "Organic Chicken", price: 8.99, unit: "per kg", image: "https://images.unsplash.com/photo-1604977045699-3dfe1f221f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 204, name: "Organic Honey", price: 6.49, unit: "500g", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 205, name: "Organic Quinoa", price: 5.99, unit: "1kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 206, name: "Organic Almonds", price: 7.99, unit: "500g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 207, name: "Organic Olive Oil", price: 9.99, unit: "500ml", image: "https://images.unsplash.com/photo-1604977048617-5ab964a8d1e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 208, name: "Organic Coffee", price: 8.49, unit: "250g", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 209, name: "Organic Tea", price: 5.49, unit: "100g", image: "https://images.unsplash.com/photo-1563823263004-eb3f2e56e244?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 210, name: "Organic Granola", price: 4.99, unit: "500g", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      3: [ // Daily Needs
        { id: 301, name: "White Bread", price: 1.99, unit: "loaf", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 302, name: "Brown Eggs", price: 2.49, unit: "dozen", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 303, name: "Whole Milk", price: 2.99, unit: "1 liter", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 304, name: "Butter", price: 3.49, unit: "250g", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 305, name: "Cheese", price: 4.99, unit: "200g", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 306, name: "Yogurt", price: 1.49, unit: "500g", image: "https://images.unsplash.com/photo-1577049597978-43a59b5b0a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 307, name: "Orange Juice", price: 2.99, unit: "1 liter", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 308, name: "Cereal", price: 3.99, unit: "500g", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 309, name: "Pasta", price: 1.99, unit: "500g", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 310, name: "Rice", price: 2.49, unit: "1kg", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      // Continuing with shops 4-15...
      4: [ // Spice Bazaar
        { id: 401, name: "Turmeric Powder", price: 1.99, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 402, name: "Cumin Seeds", price: 2.49, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 403, name: "Coriander Powder", price: 1.79, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 404, name: "Red Chili Powder", price: 2.29, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 405, name: "Garam Masala", price: 2.99, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 406, name: "Cardamom", price: 3.49, unit: "50g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 407, name: "Cinnamon Sticks", price: 2.79, unit: "50g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 408, name: "Cloves", price: 3.19, unit: "50g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 409, name: "Bay Leaves", price: 1.49, unit: "25g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 410, name: "Fennel Seeds", price: 1.99, unit: "100g", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      5: [ // Quick Stop
        { id: 501, name: "Mineral Water", price: 0.99, unit: "1 liter", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 502, name: "Energy Drink", price: 1.99, unit: "can", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 503, name: "Chips", price: 1.49, unit: "pack", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 504, name: "Chocolate Bar", price: 1.29, unit: "100g", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 505, name: "Cookies", price: 2.49, unit: "pack", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 506, name: "Ice Cream", price: 3.99, unit: "500ml", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 507, name: "Cigarettes", price: 7.99, unit: "pack", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 508, name: "Newspaper", price: 1.50, unit: "copy", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 509, name: "Magazine", price: 3.99, unit: "copy", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 510, name: "Batteries", price: 4.99, unit: "pack", image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      6: [ // Bakery Corner
        { id: 601, name: "Croissant", price: 1.99, unit: "each", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 602, name: "Baguette", price: 2.49, unit: "loaf", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 603, name: "Chocolate Cake", price: 12.99, unit: "500g", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 604, name: "Donut", price: 1.29, unit: "each", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 605, name: "Muffin", price: 1.99, unit: "each", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 606, name: "Cookies", price: 3.99, unit: "dozen", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 607, name: "Pie", price: 8.99, unit: "whole", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 608, name: "Bread Rolls", price: 2.99, unit: "6 pieces", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 609, name: "Cheesecake", price: 14.99, unit: "whole", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 610, name: "Brownies", price: 4.99, unit: "pack", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      7: [ // Meat & More
        { id: 701, name: "Chicken Breast", price: 6.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 702, name: "Beef Steak", price: 12.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 703, name: "Pork Chops", price: 8.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 704, name: "Lamb Leg", price: 14.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 705, name: "Turkey", price: 9.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 706, name: "Duck", price: 11.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 707, name: "Sausages", price: 5.99, unit: "pack", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 708, name: "Bacon", price: 7.99, unit: "200g", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 709, name: "Minced Meat", price: 6.49, unit: "500g", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 710, name: "Fish Fillet", price: 9.99, unit: "per kg", image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      8: [ // Dairy King
        { id: 801, name: "Milk", price: 2.99, unit: "1 liter", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 802, name: "Cheese", price: 4.99, unit: "200g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 803, name: "Butter", price: 3.49, unit: "250g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 804, name: "Yogurt", price: 1.99, unit: "500g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 805, name: "Cream", price: 2.49, unit: "250ml", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 806, name: "Sour Cream", price: 1.79, unit: "200g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 807, name: "Cottage Cheese", price: 2.99, unit: "250g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 808, name: "Ice Cream", price: 4.99, unit: "500ml", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 809, name: "Whipped Cream", price: 3.29, unit: "200g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 810, name: "Condensed Milk", price: 2.19, unit: "390g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      9: [ // Grain World
        { id: 901, name: "Basmati Rice", price: 3.99, unit: "1kg", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 902, name: "Brown Rice", price: 2.99, unit: "1kg", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 903, name: "Quinoa", price: 5.99, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 904, name: "Lentils", price: 2.49, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 905, name: "Chickpeas", price: 1.99, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 906, name: "Black Beans", price: 2.29, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 907, name: "Oats", price: 2.99, unit: "1kg", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 908, name: "Barley", price: 2.19, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 909, name: "Buckwheat", price: 3.49, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 910, name: "Millet", price: 2.79, unit: "500g", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
    // Add products for all other shops (3-15) following the same pattern
  };
  
  export default groceryProducts;