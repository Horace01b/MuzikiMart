// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import UploadMusic from "./pages/UploadMusic";
import Analytics from "./pages/Analytics";
import Promotions from "./pages/Promotions";
import Events from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={
            <ThemeProvider>
              <DashboardLayout />
            </ThemeProvider>
          }>
            <Route index element={<UploadMusic />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="promotions" element={<Promotions />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
