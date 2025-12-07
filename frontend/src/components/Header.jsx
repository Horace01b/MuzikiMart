// src/components/Header.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/muzikimart logo.jpeg";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFanSignup = () => {
    console.log('Navigating to fan signup');
    navigate('/fan-signup');
  };

  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MuzikiMart Logo" className="w-36 h-auto rounded-md object-cover shadow-soft-lg" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-blue-900">
          <a className="hover:text-blue-700 transition font-semibold" href="#features">Features</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#events">Events</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#about">About</a>
          <button onClick={() => navigate('/login')} className="px-4 py-2 border border-blue-900 rounded-full text-blue-900 font-semibold hover:bg-blue-50 transition">Login</button>
          <button onClick={handleFanSignup} className="px-4 py-2 border border-purple-600 rounded-full text-purple-600 font-semibold hover:bg-purple-50 transition">Join as Fan</button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] rounded-full text-black font-semibold shadow-neumorph">Join as Artist</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-blue-900 hover:text-blue-700 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100 shadow-lg relative z-50">
          <nav className="container mx-auto px-6 py-4 space-y-3">
            <a onClick={() => setIsMenuOpen(false)} className="block text-blue-900 hover:text-blue-700 transition font-semibold py-2" href="#features">Features</a>
            <a onClick={() => setIsMenuOpen(false)} className="block text-blue-900 hover:text-blue-700 transition font-semibold py-2" href="#events">Events</a>
            <a onClick={() => setIsMenuOpen(false)} className="block text-blue-900 hover:text-blue-700 transition font-semibold py-2" href="#about">About</a>
            <button onClick={() => { navigate('/login'); setIsMenuOpen(false); }} className="w-full py-3 border border-blue-900 rounded-full text-blue-900 font-semibold hover:bg-blue-50 transition active:scale-95">Login</button>
            <button onClick={() => { handleFanSignup(); setIsMenuOpen(false); }} className="w-full py-3 border border-purple-600 rounded-full text-purple-600 font-semibold hover:bg-purple-50 transition active:scale-95">Join as Fan</button>
            <button onClick={() => { navigate('/signup'); setIsMenuOpen(false); }} className="w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] rounded-full text-black font-semibold shadow-neumorph active:scale-95">Join as Artist</button>
          </nav>
        </div>
      )}
    </header>
  );
}
