import React from "react";
import { Link } from "react-router-dom";
import login from '../Home_assets/login_img.avif';
import { FaUtensils } from "react-icons/fa";

function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Section - Always visible */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#F09918] to-[#1077BC] flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        {/* Logo */}
        <div className="mb-6">
          <FaUtensils className="text-4xl text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-300 mb-6 text-center text-sm sm:text-base font-medium">
          Welcome Back! Please fill in your details
        </p>

        {/* Login Form */}
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#FF9E2F] text-black font-semibold py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 w-full max-w-xs">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gradient-to-b from-[#F09918] to-[#1077BC] text-white text-sm">OR</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="w-full max-w-xs space-y-3">
          <button
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 bg-white hover:bg-gray-50 transition duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.667-4.166-2.687-6.735-2.687-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.671-0.068-1.325-0.182-1.977h-9.818z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 bg-white hover:bg-gray-50 transition duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-7.403l-5.214-6.817-4.994 6.817h-3.261l7.73-8.835-8.166-10.665h7.523l4.528 6.232z"/>
            </svg>
            <span>Continue with Twitter</span>
          </button>
        </div>

        {/* Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">
            Forgot password?{" "}
            <a href="#" className="text-[#FF9E2F] hover:underline font-medium">
              Reset it
            </a>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#FF9E2F] hover:underline font-medium">
              Sign Up
            </Link>{" "}
            for <strong>FREE</strong>
          </p>
        </div>
      </div>

      {/* Right Section - Hidden on mobile */}
      <div className="hidden md:block md:w-1/2 h-full overflow-hidden">
        <img
          src={login}
          alt="Login visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;