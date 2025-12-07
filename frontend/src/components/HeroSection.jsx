// src/components/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Visualizer from "./Visualizer";
import logoImage from "../assets/muzikimart logo.jpeg";
import musicianImage from "../assets/musician singing.jpg";


export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start">
      {/* Left column - decorative panel / mobile preview */}
      <div className="order-2 md:order-1 lg:order-1 flex justify-center lg:justify-start">
        <div className="w-full max-w-sm md:w-80 h-[400px] md:h-[520px] frosted rounded-2xl p-4 md:p-6 shadow-soft-lg relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer animate-fade-in-up">
          {/* floating note */}
          <div className="absolute left-4 top-6 note">
            <div className="icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 9v8a3 3 0 1 0 1-5.83V3h8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col items-center text-center gap-3 md:gap-4">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#ffd6c0] via-[#ff8a66] to-[#ff5173] shadow-neumorph flex items-center justify-center overflow-hidden animate-pulse hover:animate-bounce transition-all duration-300">
              <img src={musicianImage} alt="musician singing" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">MuzikiMart</h3>
            <p className="text-xs md:text-sm text-white/80 px-2">Upload songs • Promote concerts • Sell tickets</p>

            <button onClick={() => navigate('/signup')} className="mt-2 md:mt-4 px-4 md:px-5 py-2 rounded-full bg-[#7c3aed] text-white font-medium text-sm md:text-base hover:scale-105 transition-all">Join as Artist</button>
            <button onClick={() => navigate('/login')} className="mt-1 md:mt-2 px-4 md:px-5 py-2 rounded-full border border-white/10 text-white/90 text-sm md:text-base hover:scale-105 transition-all">Login</button>
          </div>


        </div>
      </div>

      {/* Center column - Fan Signup Form */}
      <div className="order-1 md:order-2 lg:order-2 md:col-span-2 lg:col-span-1 flex justify-center">
        <div className="w-full max-w-md md:max-w-lg frosted rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-2 md:gap-3 mb-3">
            <img src={logoImage} alt="MuzikiMart Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">Join as Fan</h1>
          </div>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80">Discover amazing artists and support your favorite musicians worldwide.</p>

          <div className="mt-6 md:mt-8 bg-white/6 rounded-xl p-3 md:p-4">
            <form className="grid gap-2 md:gap-3" onSubmit={(e) => { e.preventDefault(); navigate('/fan-dashboard'); }}>
              <input 
                className="p-2 md:p-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Full Name" 
                required
              />
              <input 
                className="p-2 md:p-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Email" 
                type="email"
                required
              />
              <input 
                className="p-2 md:p-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Password" 
                type="password"
                required
              />
              <button type="submit" className="w-full py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] font-semibold text-black text-sm md:text-base hover:scale-105 transition-all">Join Now</button>
              <div className="flex gap-2 md:gap-3 mt-2">
                <button type="button" onClick={() => navigate('/login')} className="flex-1 py-2 rounded-xl border border-white/10 text-white text-xs md:text-sm hover:scale-105 transition-all">Already a fan? Login</button>
                <button type="button" onClick={() => navigate('/signup')} className="flex-1 py-2 rounded-xl border border-white/10 text-white text-xs md:text-sm hover:scale-105 transition-all">Join as Artist</button>
              </div>
            </form>

            <p className="text-xs md:text-sm text-white/60 mt-2 md:mt-3 text-center">🎵 Discover • Support • Enjoy</p>
          </div>
        </div>
      </div>

      {/* Right column - large visualizer/banner */}
      <div className="order-3 md:order-3 lg:order-3 md:col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm md:max-w-md lg:w-96 h-[400px] md:h-[520px] rounded-2xl frosted p-4 md:p-6 shadow-soft-lg overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer animate-fade-in-up animation-delay-400">
          <div className="absolute -left-12 -top-10 w-48 h-48 rounded-full bg-gradient-to-tr from-[#ffd6c0] to-[#ff8a66] opacity-30 animate-pulse animate-spin-slow"></div>

          <div className="relative h-full flex flex-col justify-between">
            <div>
              <h4 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">Global Musician Promotion</h4>
              <p className="text-white/70 mt-2 text-xs md:text-sm">Advertise your concert, sell tickets and connect with fans worldwide.</p>
            </div>

            <div className="mt-6">
              <Visualizer />
            </div>

            <div className="mt-3 md:mt-4 flex gap-2 md:gap-3">
              <button onClick={() => navigate('/signup')} className="flex-1 py-2 md:py-3 rounded-xl bg-[#ff8a66] text-black font-semibold text-center text-sm md:text-base hover:scale-105 transition-all">Create Event</button>
              <button onClick={() => alert('Explore feature coming soon!')} className="flex-1 py-2 md:py-3 rounded-xl border border-white/8 text-white text-center text-sm md:text-base hover:scale-105 transition-all">Explore</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
