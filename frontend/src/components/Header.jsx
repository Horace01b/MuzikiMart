// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* logo uses exact path requested */}
          <img src="src/assets/muzikimart logo.jpeg" alt="MuzikiMart Logo" className="w-36 h-auto rounded-md object-cover shadow-soft-lg" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-blue-900">
          <a className="hover:text-blue-700 transition font-semibold" href="#features">Features</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#events">Events</a>
          <a className="hover:text-blue-700 transition font-semibold" href="#about">About</a>
          <a className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] rounded-full text-black font-semibold shadow-neumorph">Sign Up</a>
        </nav>
      </div>
    </header>
  );
}
