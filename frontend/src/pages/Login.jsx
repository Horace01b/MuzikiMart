import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/muzikimart logo.jpeg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    alert(`Welcome back!`);
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <img src={logo} alt="MuzikiMart" className="w-32 h-auto mx-auto rounded-md mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Artist Login</h2>
          <p className="text-gray-600 mt-2">Access your musician dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] text-black font-semibold rounded-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <button
            onClick={() => navigate("/signup")}
            className="text-indigo-600 hover:text-indigo-800 font-medium block w-full"
          >
            Don't have an account? Sign up
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}