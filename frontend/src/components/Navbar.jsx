import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 bg-black/30 backdrop-blur-md border-b border-b-white/6">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <img src="/mnt/data/user's dashboard.webp" alt="MuzikiMart" className="w-32 h-10 object-cover rounded-md opacity-90" />
        </div>

        <nav className="flex items-center gap-3 text-sm">
          <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-white/8' : 'hover:bg-white/4'}`}>Home</NavLink>
          <NavLink to="/explore" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-white/8' : 'hover:bg-white/4'}`}>Explore</NavLink>
          <NavLink to="/library" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-white/8' : 'hover:bg-white/4'}`}>Library</NavLink>
          <NavLink to="#" className="px-3 py-2 rounded-md hover:bg-white/4">Subscriptions</NavLink>
        </nav>
      </div>
    </header>
  );
}
