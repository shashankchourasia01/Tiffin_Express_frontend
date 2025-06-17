// src/components/ShopProducts.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import groceryProducts from '../data/groceryProducts';

const ShopProducts = () => {
  const { shopId } = useParams();
  const products = groceryProducts[shopId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-8 flex items-center">
          <Link to="/grocery" className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Shop Products</h1>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
                <p className="text-orange-600 font-semibold mb-2">${product.price} <span className="text-gray-500 text-sm font-normal">/ {product.unit}</span></p>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button className="text-sm bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-colors">
                    Add to Cart
                  </button>
                  <button className="text-gray-500 hover:text-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;