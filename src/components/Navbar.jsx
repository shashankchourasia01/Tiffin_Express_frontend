import React, { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaUtensils className="text-xl text-black" />
          <span className="font-semibold text-lg md:text-xl text-black">
            Tiffin Express
          </span>
        </Link>

        {/* Middle - Menu links (Desktop Only) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
        <li>
            <Link
              to="/find"
              className="cursor-pointer hover:text-orange-600"
            >
              Find A Kitchen
            </Link>
          </li>
          <li>
            <Link
              to="/howItWorks"
              className="cursor-pointer hover:text-orange-600"
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="cursor-pointer hover:text-orange-600"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/faq" className="cursor-pointer hover:text-orange-600">
              FAQ
            </Link>
          </li>
          <li>
              <Link
                to="/help"
                className="cursor-pointer hover:text-orange-600"
              >
                Help & Support
              </Link>
            </li>
        </ul>

        {/* Right - Buttons + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Always visible buttons */}
          <Link to="/login">
  <button className="bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-orange-700 transition">
    Sign In
  </button>
</Link>
<Link to="/register">
  <button className="bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-orange-700 transition">
    Sign Up
  </button>
</Link>

          {/* Hamburger icon (Mobile only) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-black focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
          <li>
            <Link
              to="/find"
              className="cursor-pointer hover:text-orange-600"
            >
              Find A Kitchen
            </Link>
          </li>
            <li>
              <Link
                to="/howItWorks"
                className="cursor-pointer hover:text-orange-600"
              >
                How it Works
              </Link>
            </li>
            <li>
            <Link
              to="/grocery"
              className="cursor-pointer hover:text-orange-600"
            >
              Grocery
            </Link>
          </li>
            <li>
              <Link to="/faq" className="cursor-pointer hover:text-orange-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="cursor-pointer hover:text-orange-600"
              >
                Help & Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
