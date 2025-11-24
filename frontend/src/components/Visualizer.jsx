// src/components/Visualizer.jsx
import React from "react";

const RandomBar = ({ delay = 0 }) => {
  const height = Math.floor(20 + Math.random() * 160);
  return (
    <div
      className="visualizer-bar mx-1 animate-pulseWave"
      style={{
        height,
        animationDelay: `${delay}ms`,
        background: `linear-gradient(180deg, #FFD6C0, #FF8A66)`
      }}
    />
  );
};

export default function Visualizer({ small=false }) {
  const bars = small ? 8 : 16;
  return (
    <div className={`${small ? "h-20" : "h-36"} flex items-end justify-center`}>
      {Array.from({length: bars}).map((_, i) => (
        <RandomBar key={i} delay={i*60} />
      ))}
    </div>
  );
}
