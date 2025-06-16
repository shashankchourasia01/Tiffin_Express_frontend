import React, { useState } from "react";
import axios from "../utils/axios"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import login from "../Home_assets/login_img.avif";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", formData);
      console.log("Registered:", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // redirect to homepage/dashboard
    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
      alert("Registration failed. Check console.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-y-auto">
      {/* Left Section (Registration Form) - Always visible */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#F09918] to-[#1077BC] flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        {/* Logo */}
        <div className="mb-6">
          <FaUtensils className="text-4xl text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Register Now</h2>
        <p className="text-gray-300 mt-2 mb-6 text-center text-sm sm:text-base font-medium">
          Please fill in your details
        </p>

        {/* Registration Form */}
        <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF9E2F] text-black font-semibold py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-md mt-2"
          >
            Verify & Register
          </button>
        </form>

        <p className="text-gray-300 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/Login" className="text-[#FF9E2F] hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>

      {/* Right Section (Image) - Hidden on mobile */}
      <div className="hidden md:block md:w-1/2 h-full overflow-hidden">
        <img
          src={login}
          alt="Registration visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
