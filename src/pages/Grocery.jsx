import React, { useState } from "react";
import { Link } from "react-router-dom";

const GroceryPage = () => {
  // Sample shop data
  const shops = [
    {
      id: 1,
      name: "Fresh Mart",
      owner: "Rajesh Kumar",
      description:
        "Your one-stop shop for fresh fruits, vegetables and daily groceries",
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.5 km",
    },
    {
      id: 2,
      name: "Organic Delight",
      owner: "Priya Sharma",
      description: "100% organic products with home delivery options available",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Daily Needs",
      owner: "Vikram Singh",
      description: "All your household essentials at competitive prices",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.8 km",
    },
    {
      id: 4,
      name: "Spice Bazaar",
      owner: "Anjali Patel",
      description: "Wide variety of spices and ethnic ingredients",
      image:
        "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.5 km",
    },
    {
      id: 5,
      name: "Quick Stop",
      owner: "Mohammed Ali",
      description: "Convenience store open 24/7 for your urgent needs",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.3 km",
    },
    {
      id: 6,
      name: "Bakery Corner",
      owner: "Sunita Reddy",
      description: "Freshly baked breads, cakes and pastries daily",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.0 km",
    },
    {
      id: 7,
      name: "Meat & More",
      owner: "Arjun Khanna",
      description: "Premium quality meats and seafood with expert cuts",
      image:
        "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "2.1 km",
    },
    {
      id: 8,
      name: "Dairy King",
      owner: "Neha Gupta",
      description: "Farm fresh dairy products and milk delivered daily",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.7 km",
    },
    {
      id: 9,
      name: "Grain World",
      owner: "Sanjay Verma",
      description: "All types of grains, pulses and cereals in bulk",
      image:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.8 km",
    },
    {
      id: 10,
      name: "Sweet Tooth",
      owner: "Rahul Desai",
      description: "Traditional and modern sweets and desserts",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.3 km",
    },
    {
      id: 11,
      name: "Frozen Foods",
      owner: "Meena Iyer",
      description: "Wide selection of frozen vegetables and ready-to-eat meals",
      image:
        "https://images.unsplash.com/photo-1611171711912-e3f6b536f532?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "2.5 km",
    },
    {
      id: 12,
      name: "Beverage Depot",
      owner: "Karan Malhotra",
      description: "All your favorite drinks and beverages in one place",
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.9 km",
    },
    {
      id: 13,
      name: "Healthy Bites",
      owner: "Divya Joshi",
      description: "Organic, gluten-free and specialty diet products",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "1.7 km",
    },
    {
      id: 14,
      name: "Corner Store",
      owner: "Amit Trivedi",
      description: "Neighborhood convenience store with all essentials",
      image:
        "https://images.unsplash.com/photo-1602722053028-1c3b76186d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "0.2 km",
    },
    {
      id: 15,
      name: "Gourmet Shop",
      owner: "Nisha Rao",
      description: "Premium imported and specialty gourmet products",
      image:
        "https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      distance: "2.3 km",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Nearby Grocery Shops
          </h1>
          <p className="text-gray-600 text-lg">
            Discover local businesses in your area
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
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
            <input
              type="text"
              placeholder="Search shops by name, owner or description..."
              className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Shop Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Shop Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white">
                    {shop.distance} away
                  </span>
                </div>
              </div>

              {/* Shop Info */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {shop.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                      Owner: {shop.owner}
                    </p>
                  </div>
                  <button className="text-orange-500 hover:text-orange-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {shop.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Link
                    to={`/grocery/shop/${shop.id}`} // This links to the product page with shop ID
                    className="text-sm bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    View Products
                  </Link>
                  <button className="text-gray-500 hover:text-orange-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredShops.length > 0 ? (
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px">
              <button className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 border-t border-b border-gray-300  text-sm font-medium text-orange-600 bg-orange-50">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No shops found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroceryPage;
