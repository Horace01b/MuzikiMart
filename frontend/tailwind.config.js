// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        muziki: {
          DEFAULT: "#0f1724",
          accent: "#FF8A66",
          teal: "#2dd4bf",
          neon: "#7c3aed"
        }
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16,24,40,0.45)',
        'neumorph': '12px 12px 24px rgba(12,15,20,0.35), -8px -8px 18px rgba(255,255,255,0.02)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseWave: {
          '0%': { transform: 'scaleY(0.7)', opacity: 0.5 },
          '50%': { transform: 'scaleY(1.0)', opacity: 1 },
          '100%': { transform: 'scaleY(0.7)', opacity: 0.5 }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseWave: 'pulseWave 700ms ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        muziki: {
          bg: "#0b1220",
          warm: "#ff8a66",
          soft: "#ffd6c0",
          indigo: "#7c3aed",
          teal: "#2dd4bf"
        }
      },
      boxShadow: {
        mdsoft: "0 8px 24px rgba(10,15,25,0.35)"
      }
    }
  },
  plugins: []
};
