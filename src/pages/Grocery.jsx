import React from 'react';

const GroceryPage = () => {
  // Sample shop data
  const shops = [
    {
      id: 1,
      name: "Fresh Mart",
      owner: "Rajesh Kumar",
      description: "Your one-stop shop for fresh fruits, vegetables and daily groceries",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Organic Delight",
      owner: "Priya Sharma",
      description: "100% organic products with home delivery options available",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Daily Needs",
      owner: "Vikram Singh",
      description: "All your household essentials at competitive prices",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Spice Bazaar",
      owner: "Anjali Patel",
      description: "Wide variety of spices and ethnic ingredients",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "Quick Stop",
      owner: "Mohammed Ali",
      description: "Convenience store open 24/7 for your urgent needs",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      name: "Bakery Corner",
      owner: "Sunita Reddy",
      description: "Freshly baked breads, cakes and pastries daily",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 7,
      name: "Meat & More",
      owner: "Arjun Khanna",
      description: "Premium quality meats and seafood with expert cuts",
      image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 8,
      name: "Dairy King",
      owner: "Neha Gupta",
      description: "Farm fresh dairy products and milk delivered daily",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 9,
      name: "Grain World",
      owner: "Sanjay Verma",
      description: "All types of grains, pulses and cereals in bulk",
      image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 10,
      name: "Sweet Tooth",
      owner: "Rahul Desai",
      description: "Traditional and modern sweets and desserts",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 11,
      name: "Frozen Foods",
      owner: "Meena Iyer",
      description: "Wide selection of frozen vegetables and ready-to-eat meals",
      image: "https://images.unsplash.com/photo-1611171711912-e3f6b536f532?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 12,
      name: "Beverage Depot",
      owner: "Karan Malhotra",
      description: "All your favorite drinks and beverages in one place",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 13,
      name: "Healthy Bites",
      owner: "Divya Joshi",
      description: "Organic, gluten-free and specialty diet products",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 14,
      name: "Corner Store",
      owner: "Amit Trivedi",
      description: "Neighborhood convenience store with all essentials",
      image: "https://images.unsplash.com/photo-1602722053028-1c3b76186d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 15,
      name: "Gourmet Shop",
      owner: "Nisha Rao",
      description: "Premium imported and specialty gourmet products",
      image: "https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Nearby Grocery Shops</h1>
          <p className="text-gray-600">Discover local businesses in your area</p>
        </div>
        
        {/* Search and Filter (optional) */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search shops..."
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Shop Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <div 
              key={shop.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Shop Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Shop Info */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{shop.name}</h2>
                <p className="text-sm text-gray-600 mb-2">Owner: {shop.owner}</p>
                <p className="text-gray-600 text-sm">{shop.description}</p>
                
                {/* Action Buttons */}
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-sm bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-colors">
                    View Products
                  </button>
                  <span className="text-xs bg-gray-100 text-gray-800 py-1 px-2 rounded-full">
                    0.5 km away
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (optional) */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-orange-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default GroceryPage;