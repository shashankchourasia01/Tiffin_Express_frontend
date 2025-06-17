import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FindKitchen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredKitchens, setFilteredKitchens] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to access this page");
      navigate("/login");
    }
  }, [navigate]);

  // Mock data for 20 kitchens in Bokaro
  const kitchens = [
    {
      id: 1,
      name: "Bokaro Tiffin Service",
      address: "Sector 5, Bokaro Steel City",
      description:
        "Homely meals with daily changing menu. Specializes in North Indian cuisine.",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      deliveryTime: "30-45 mins",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Spicy Kitchen",
      address: "Chas, Bokaro",
      description:
        "Authentic Bihari and Jharkhandi thali available. Famous for litti chokha.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.2,
      deliveryTime: "40-55 mins",
      contact: "8765432109",
    },
    {
      id: 3,
      name: "Annapurna Mess",
      address: "Sector 4, Bokaro Steel City",
      description:
        "Pure vegetarian meals with unlimited servings. Budget friendly option.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.0,
      deliveryTime: "25-40 mins",
      contact: "7654321098",
    },
    {
      id: 4,
      name: "Mom's Magic Kitchen",
      address: "Sector 12, Bokaro Steel City",
      description: "Home-style cooking with emphasis on hygiene and nutrition.",
      image:
        "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      deliveryTime: "35-50 mins",
      contact: "6543210987",
    },
    {
      id: 5,
      name: "Bihari Zaika",
      address: "City Centre, Bokaro",
      description:
        "Specializes in traditional Bihari dishes. Must try their sattu paratha.",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.3,
      deliveryTime: "45-60 mins",
      contact: "9432109876",
    },
    {
      id: 6,
      name: "The Dhaba Style",
      address: "Near Bokaro Airport",
      description:
        "Authentic dhaba style food with rustic flavors. Famous for their butter chicken.",
      image:
        "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      deliveryTime: "50-65 mins",
      contact: "8321098765",
    },
    {
      id: 7,
      name: "Green Leaf Pure Veg",
      address: "Sector 8, Bokaro Steel City",
      description:
        "100% vegetarian kitchen with organic ingredients. Jain options available.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      deliveryTime: "30-45 mins",
      contact: "7210987654",
    },
    {
      id: 8,
      name: "Taste of Bengal",
      address: "Sector 3, Bokaro Steel City",
      description:
        "Authentic Bengali cuisine. Must try their fish curry and mishti doi.",
      image:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      deliveryTime: "40-55 mins",
      contact: "6109876543",
    },
    {
      id: 9,
      name: "Punjabi Rasoi",
      address: "Chira Chas, Bokaro",
      description:
        "Hearty Punjabi meals with generous portions. Famous for their dal makhani.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      deliveryTime: "35-50 mins",
      contact: "5098765432",
    },
    {
      id: 10,
      name: "South Indian Delight",
      address: "Sector 2, Bokaro Steel City",
      description:
        "Authentic South Indian meals including dosa, idli, vada and more.",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.1,
      deliveryTime: "25-40 mins",
      contact: "4987654321",
    },
    {
      id: 11,
      name: "Ghar Ka Khana",
      address: "Sector 6, Bokaro Steel City",
      description:
        "Home cooked meals delivered with love. Roti, sabzi, dal, chawal combo.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.3,
      deliveryTime: "30-45 mins",
      contact: "3876543210",
    },
    {
      id: 12,
      name: "Chinese Wok",
      address: "City Centre, Bokaro",
      description:
        "Authentic Chinese cuisine with Indian twist. Best hakka noodles in town.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.0,
      deliveryTime: "40-55 mins",
      contact: "2765432109",
    },
    {
      id: 13,
      name: "Royal Thali",
      address: "Sector 1, Bokaro Steel City",
      description:
        "Luxury thali with 10+ items. Perfect for special occasions.",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      deliveryTime: "45-60 mins",
      contact: "1654321098",
    },
    {
      id: 14,
      name: "Healthy Bites",
      address: "Sector 9, Bokaro Steel City",
      description:
        "Diet conscious meals with calorie count. Perfect for weight watchers.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      deliveryTime: "35-50 mins",
      contact: "9876543211",
    },
    {
      id: 15,
      name: "Mughlai Treat",
      address: "Near Bokaro Mall",
      description:
        "Rich Mughlai cuisine with authentic flavors. Must try their biryani.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      deliveryTime: "50-65 mins",
      contact: "8765432101",
    },
    {
      id: 16,
      name: "Gujarati Rasoi",
      address: "Sector 10, Bokaro Steel City",
      description:
        "Authentic Gujarati thali with sweet touch. Unlimited servings available.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.2,
      deliveryTime: "30-45 mins",
      contact: "7654321092",
    },
    {
      id: 17,
      name: "Rajasthani Dhamaka",
      address: "Sector 7, Bokaro Steel City",
      description:
        "Spicy Rajasthani food with authentic flavors. Famous for dal baati churma.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      deliveryTime: "40-55 mins",
      contact: "6543210983",
    },
    {
      id: 18,
      name: "Fast Food Junction",
      address: "Near Bokaro Railway Station",
      description:
        "Burgers, pizzas, sandwiches and more. Quick bites for fast food lovers.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 3.9,
      deliveryTime: "20-35 mins",
      contact: "5432109874",
    },
    {
      id: 19,
      name: "Sweet & Savory",
      address: "City Centre, Bokaro",
      description:
        "Combination of sweets and snacks. Perfect for evening cravings.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.1,
      deliveryTime: "25-40 mins",
      contact: "4321098765",
    },
    {
      id: 20,
      name: "The Dessert House",
      address: "Sector 11, Bokaro Steel City",
      description:
        "Exclusively desserts from across India. Perfect for sweet tooth.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      deliveryTime: "30-45 mins",
      contact: "3210987656",
    },
  ];

  useEffect(() => {
    setFilteredKitchens(kitchens);
  },[]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = kitchens.filter(
      (kitchen) =>
        kitchen.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kitchen.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredKitchens(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Find Kitchen Services in Bokaro
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-2 mb-8 shadow-md rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Enter your address or area in Bokaro..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg sm:rounded-none"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredKitchens.length > 0 ? (
          filteredKitchens.map((kitchen) => (
            <div
              key={kitchen.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={kitchen.image}
                  alt={kitchen.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full font-bold text-gray-800 text-sm">
                  {kitchen.rating} ★
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {kitchen.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{kitchen.address}</p>
                <p className="text-gray-700 text-sm mb-3">
                  {kitchen.description}
                </p>
                <div className="flex justify-between text-gray-600 text-xs mb-4">
                  <span>⏱️ {kitchen.deliveryTime}</span>
                  <span>📞 {kitchen.contact}</span>
                </div>
                <Link
                  to={`/menu/${kitchen.id}`}
                  className="w-full block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Menu
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-600 text-lg">
              No kitchens found matching your search. Try a different location.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindKitchen;
