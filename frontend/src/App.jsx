// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FanSignup from "./pages/fans/FanSignup";
import FanDashboard from "./pages/fans/FanDashboard";
import Index from "./pages/Index";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fan-signup" element={<FanSignup />} />
          <Route path="/fan-dashboard" element={<FanDashboard />} />
          <Route path="/dashboard" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
