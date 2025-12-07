// src/pages/LandingPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EventCards from "../components/EventCards";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>,
      gradient: "from-[#7c3aed] to-[#2dd4bf]",
      title: "Upload Music",
      description: "Share your music with the world and build your fanbase"
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6z"/></svg>,
      gradient: "from-[#ff8a66] to-[#ff5173]",
      title: "Promote Concerts",
      description: "Create and promote your live events to reach more fans"
    },
    {
      icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22 10v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2 0H4v6h16v-6zM4 6h16v2H4V6z"/></svg>,
      gradient: "from-[#ffd6c0] to-[#ff8a66]",
      title: "Sell Tickets",
      description: "Easy ticket sales with multiple payment options"
    }
  ];

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
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="frosted rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mb-4 flex items-center justify-center hover:animate-spin transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="frosted rounded-xl p-6 text-center transition-all duration-300 min-h-[200px]">
              <div className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300`}>
                {features[activeFeature].icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{features[activeFeature].title}</h3>
              <p className="text-white/70">{features[activeFeature].description}</p>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setActiveFeature(activeFeature === 0 ? features.length - 1 : activeFeature - 1)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveFeature(activeFeature === features.length - 1 ? 0 : activeFeature + 1)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
