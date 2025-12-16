import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FanSignup from "./pages/fans/FanSignup";
import FanDashboard from "./pages/fans/FanDashboard";
import Discovery from "./pages/fans/Discovery";
import Index from "./pages/Index";
import Events from "./pages/Events";
import MyMusic from "./pages/MyMusic";
import Merchandise from "./pages/Merchandise";
import Collaborations from "./pages/Collaborations";
import Analytics from "./pages/Analytics";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen font-sans antialiased">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/fan-signup" element={<FanSignup />} />
              <Route path="/fan-dashboard" element={<FanDashboard />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/dashboard" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/my-music" element={<MyMusic />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/collaborations" element={<Collaborations />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
