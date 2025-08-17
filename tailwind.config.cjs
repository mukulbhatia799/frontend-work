/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { green: "#34D399", dark: "#0F172A", mint: "#22C55E", soft: "#E6FFF5" },
      },
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica','Arial','Apple Color Emoji','Segoe UI Emoji'],
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.07)" },
      borderRadius: { '4xl': "2rem" },
    },
  },
  plugins: [],
};
