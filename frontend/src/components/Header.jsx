// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/muzikimart logo.jpeg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MuzikiMart Logo" className="w-36 h-auto rounded-md object-cover shadow-soft-lg" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-blue-900">
          <a className="hover:text-blue-700 transition font-semibold" href="#features">Features</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#events">Events</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#about">About</a>
          <button onClick={() => navigate('/login')} className="px-4 py-2 border border-blue-900 rounded-full text-blue-900 font-semibold hover:bg-blue-50 transition">Login</button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] rounded-full text-black font-semibold shadow-neumorph">Join as Artist</button>
        </nav>
      </div>
    </header>
  );
}
