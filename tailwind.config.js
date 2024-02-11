/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#000000",
        blanc: "#FFFFFF",
        dark: "0C0F11",
        darkblue: "#1A2328",
        light: "#EDEDED",
        lightblue: "#BCD8DE",
        grey: "#656565",
      },

      // Typos
      fontFamily: {
        darker: "Darker Grotesque, sans-serif",
      },

      // Ombres
      boxShadow: {
        'drop2': '0 10px 48px rgba(30, 28, 46, 0.08)',
        'drop-shadow' : '0px 24px 48px rgba(30, 28, 46, 0.08)',
      }
    },
  },
  plugins: [],
};