// src/pages/LandingPage.jsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EventCards from "../components/EventCards";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image blurred */}
      <div className="absolute inset-0 muziki-hero-bg -z-10" aria-hidden="true"></div>
      {/* Slight dark overlay */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>

      <Header />
      <main className="flex-1 container mx-auto px-6 lg:px-20 py-12">
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="mt-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Features</h2>
            <p className="text-green-700 max-w-2xl mx-auto">Discover powerful tools designed for musicians and music lovers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="frosted rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] rounded-full mx-auto mb-4 flex items-center justify-center hover:animate-spin transition-all duration-300">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Upload Music</h3>
              <p className="text-white/70">Share your music with the world and build your fanbase</p>
            </div>
            <div className="frosted rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff8a66] to-[#ff5173] rounded-full mx-auto mb-4 flex items-center justify-center hover:animate-spin transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Promote Concerts</h3>
              <p className="text-white/70">Create and promote your live events to reach more fans</p>
            </div>
            <div className="frosted rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-gradient-to-r from-[#ffd6c0] to-[#ff8a66] rounded-full mx-auto mb-4 flex items-center justify-center hover:animate-spin transition-all duration-300">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22 10v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2 0H4v6h16v-6zM4 6h16v2H4V6z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sell Tickets</h3>
              <p className="text-white/70">Easy ticket sales with multiple payment options</p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="mt-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Upcoming Events</h2>
            <p className="text-orange-400 max-w-2xl mx-auto">Discover amazing concerts and events happening near you</p>
          </div>
          <EventCards />
        </section>

        {/* About Section */}
        <section id="about" className="mt-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About MuzikiMart</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-blue-900 text-lg mb-6">
                MuzikiMart is a global platform connecting musicians with their fans worldwide. 
                We provide tools for artists to share their music, promote concerts, and sell tickets seamlessly.
              </p>
              <p className="text-blue-900">
                Whether you're an emerging artist or an established musician, MuzikiMart helps you 
                reach new audiences and grow your fanbase across the globe.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
