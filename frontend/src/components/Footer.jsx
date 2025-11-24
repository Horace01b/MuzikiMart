// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-8">
      <div className="container mx-auto px-6 lg:px-20 text-center text-blue-300">
        <p>MuzikiMart © {new Date().getFullYear()} — Build, Share & Promote your music worldwide.</p>
      </div>
    </footer>
  );
}
