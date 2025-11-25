import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/muzikimart logo.jpeg";

function NavTab({to, children, isDark}) {
  return (
    <NavLink
      to={to}
      className={({isActive}) => `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg scale-105" : isDark ? "text-gray-300 hover:bg-gray-700/60 hover:scale-105 hover:shadow-md" : "text-gray-700 hover:bg-white/60 hover:scale-105 hover:shadow-md"}`}
    >
      {children}
    </NavLink>
  )
}

export default function DashboardLayout(){
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30' : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse animation-delay-1000 ${isDark ? 'bg-gradient-to-r from-blue-600/30 to-teal-600/30' : 'bg-gradient-to-r from-blue-400/20 to-teal-400/20'}`}></div>
      </div>

      <header className={`relative backdrop-blur-sm border-b shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-800/80 border-gray-700/20' : 'bg-white/80 border-white/20'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MuzikiMart" className="w-36 h-auto rounded-md object-cover shadow-md hover:scale-105 transition-transform" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Artist Studio</h1>
              <p className={`text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Create • Share • Grow</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavTab to="/dashboard" isDark={isDark}>🎵 Upload</NavTab>
            <NavTab to="/dashboard/analytics" isDark={isDark}> Analytics</NavTab>
            <NavTab to="/dashboard/promotions" isDark={isDark}> Promotions</NavTab>
            <NavTab to="/dashboard/events" isDark={isDark}>🎤 Events</NavTab>
            <button onClick={toggleTheme} className={`ml-2 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg ${isDark ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'}`}>
              {isDark ? '☀️' : '🌙'}
            </button>
            <button onClick={()=>navigate("/")} className="ml-2 px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#2dd4bf] text-white rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">🏠 Home</button>
          </nav>
        </div>
      </header>

      <main className="relative container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}
