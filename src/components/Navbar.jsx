import React, { useState, useEffect } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleFindKitchenClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/find");
    } else {
      alert("You must be logged in to use this feature!");
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaUtensils className="text-xl text-black" />
          <span className="font-semibold text-lg md:text-xl text-black">
            Tiffin Express
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
          <li>
            <Link
              to="/find"
              onClick={handleFindKitchenClick}
              className="hover:text-orange-600"
            >
              Find A Kitchen
            </Link>
          </li>
          <li>
            <Link to="/howItWorks" className="hover:text-orange-600">
              How it Works
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-orange-600">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-orange-600">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-orange-600">
              Help & Support
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
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
            </>
          )}

          {/* Mobile Toggle */}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
            <li>
              <Link
                to="/find"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Find A Kitchen
              </Link>
            </li>
            <li>
              <Link
                to="/howItWorks"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                onClick={toggleMenu}
                className="hover:text-orange-600"
              >
                Help & Support
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="text-red-600 font-semibold"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="text-orange-600 font-semibold"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    onClick={toggleMenu}
                    className="text-orange-600 font-semibold"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
