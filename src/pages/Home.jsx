import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import kitchen from "../Home_assets/kitechen.avif";
import cooked from "../Home_assets/home_cooked.avif";
import local_kitchen from "../Home_assets/local_kitchens.avif";
import delivery from "../Home_assets/food_del.avif";
import subscription from "../Home_assets/no_subscription.avif";
import timely from "../Home_assets/timely_delivery.avif";
import trial from "../Home_assets/free_trial.avif";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/find");
  };
  return (
    <div className="flex flex-col">
      {/* Hero Container: center & limit width */}
      <div className="w-full mt-5 overflow-hidden">
        <section
          className="
            relative flex items-center justify-center
            mx-auto max-w-screen-xl px-4 md:px-8
            h-[70vh] sm:h-[55vh] lg:h-[85vh]
            bg-cover bg-center rounded-2xl
          "
          style={{ backgroundImage: `url(${kitchen})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 text-left px-4 md:px-8 max-w-2xl sm:mr-60 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Home‑cooked meals, delivered
            </h1>
            <p className="mt-4 text-base sm:text-lg">
              Discover new dishes from home kitchens near you. Try a meal today!
            </p>

            {/* Search Bar */}
            <div
              className="
        mt-8 flex items-center w-full max-w-md
        bg-white rounded-full overflow-hidden shadow-lg
      "
            >
              <div className="pl-4 text-gray-500">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Enter delivery address"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
              />
              <button
                className="bg-orange-600 text-white px-6 py-2 font-medium hover:bg-orange-700 transition"
                onClick={handleSearch}
              >
                Find food
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why people are excited about Tiffin Express ?
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Tiffin Express is a food delivery service that connects people with
            home‑cooked meals, delivered right to their doorsteps. The service
            offers a variety of cuisines, from traditional Indian dishes to
            modern fusion creations. With a focus on quality and convenience,
            Tiffin Express aims to provide an exceptional dining experience for
            its customers.
          </p>
          <br />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why choose Tiffin Express ?
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Because it delivers fresh, home‑cooked, and nutritious meals right
            to your doorstep—saving you time, money, and the hassle of planning,
            cooking, or cleaning. With customizable, portion-controlled options,
            you enjoy wholesome, balanced food tailored to your preferences, all
            at an affordable price.
          </p>
        </div>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="flex sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-6 md:gap-8 lg:gap-12 overflow-x-auto sm:overflow-visible">
              {[
                {
                  image: cooked,
                  title: "Home-Cooked Meals",
                  desc: "Discover new dishes from home kitchens near you",
                },
                {
                  image: local_kitchen,
                  title: "Local kitchens",
                  desc: "Explore new cuisines and support local cooks",
                },
                {
                  image: delivery,
                  title: "Express Delivery",
                  desc: "Get your meal delivered in about 30 minutes",
                },
                {
                  image: subscription,
                  title: "No Subscription",
                  desc: "Order when you want – no subscription needed",
                },
                {
                  image: timely,
                  title: "Timely Delivery",
                  desc: "Enjoy your meal when you want it, with reliable delivery",
                },
                {
                  image: trial,
                  title: "1 Day Free Trial",
                  desc: "Experience our service absolutely free for a day",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-auto flex flex-col items-center text-center min-w-[240px] sm:min-w-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-80 h-52 rounded-xl object-cover mb-4"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base font-medium mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Meal Plans Section - Horizontal Scroll on Mobile */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-left">
              Our Popular Meal Plans
            </h2>

            {/* Mobile Horizontal Scroll Container */}
            <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex space-x-4 w-max">
                {[
                  {
                    name: "Student Special",
                    price: "₹120/day",
                    features: [
                      "2 meals/day",
                      "5 days/week",
                      "Balanced nutrition",
                      "Budget-friendly",
                    ],
                    bestFor: "Perfect for students on tight budgets",
                  },
                  {
                    name: "Professional Package",
                    price: "₹180/day",
                    features: [
                      "3 meals/day",
                      "6 days/week",
                      "Premium dishes",
                      "Customizable options",
                    ],
                    bestFor: "Ideal for working professionals",
                  },
                  {
                    name: "Family Plan",
                    price: "₹350/day",
                    features: [
                      "4 meals/day",
                      "7 days/week",
                      "Varied cuisine",
                      "Family-sized portions",
                    ],
                    bestFor: "Great for small families",
                  },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-64"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800">
                          {plan.name}
                        </h3>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {plan.price}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="w-5 h-5 text-orange-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-gray-500 italic">
                        {plan.bestFor}
                      </p>
                      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Student Special",
                  price: "₹120/day",
                  features: [
                    "2 meals/day",
                    "5 days/week",
                    "Balanced nutrition",
                    "Budget-friendly",
                  ],
                  bestFor: "Perfect for students on tight budgets",
                },
                {
                  name: "Professional Package",
                  price: "₹180/day",
                  features: [
                    "3 meals/day",
                    "6 days/week",
                    "Premium dishes",
                    "Customizable options",
                  ],
                  bestFor: "Ideal for working professionals",
                },
                {
                  name: "Family Plan",
                  price: "₹350/day",
                  features: [
                    "4 meals/day",
                    "7 days/week",
                    "Varied cuisine",
                    "Family-sized portions",
                  ],
                  bestFor: "Great for small families",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">
                        {plan.name}
                      </h3>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-orange-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-gray-500 italic">{plan.bestFor}</p>
                    <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-left">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "As a student living away from home, Tiffin Express has been a lifesaver. The food tastes just like home!",
                  name: "Rahul Sharma",
                  role: "College Student",
                  rating: 5,
                },
                {
                  quote:
                    "I don't have time to cook with my busy work schedule. The professional package saves me hours every week.",
                  name: "Priya Patel",
                  role: "Software Engineer",
                  rating: 4,
                },
                {
                  quote:
                    "We've been using the family plan for 3 months now. The variety and quality are consistently excellent.",
                  name: "The Gupta Family",
                  role: "Regular Customers",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-orange-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - Horizontal Scroll on Mobile */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-left">
              How Tiffin Express Works
            </h2>

            {/* Mobile Horizontal Scroll Container */}
            <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
              <div className="flex space-x-6 w-max px-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    title: "Select Your Plan",
                    description:
                      "Choose from our variety of meal plans that suit your needs",
                    number: "1",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    ),
                    title: "Place Your Order",
                    description:
                      "Customize your meals and set your delivery schedule",
                    number: "2",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Freshly Prepared",
                    description: "Our chefs cook your meals fresh each day",
                    number: "3",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    ),
                    title: "Enjoy Your Meal",
                    description:
                      "Hot, delicious food delivered to your doorstep",
                    number: "4",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md flex-shrink-0 w-64"
                  >
                    <div className="bg-orange-100 p-3 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <span className="text-orange-500 font-bold text-xl mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:block relative">
              {/* Progress line */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 h-1 w-4/5 bg-orange-200"></div>

              <div className="grid grid-cols-4 gap-8">
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    title: "Select Your Plan",
                    description:
                      "Choose from our variety of meal plans that suit your needs",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    ),
                    title: "Place Your Order",
                    description:
                      "Customize your meals and set your delivery schedule",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Freshly Prepared",
                    description: "Our chefs cook your meals fresh each day",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    ),
                    title: "Enjoy Your Meal",
                    description:
                      "Hot, delicious food delivered to your doorstep",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                    <span className="mt-4 text-orange-500 font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
