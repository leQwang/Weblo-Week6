/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    xsm: "425px",
    sm: "768px",
    // md: "1020px",
    // lg: "1284px",
    // xl: "1440px",
    // xxl: "2048px",
    // xxxl: "3840px",
  },
  theme: {
    extend: {},
    fontFamily: {
      primary: ["", "sans-serif"],
      tungsten: ["Tunsten", "sans-serif"],
      GMVDIN: ["GMVDIN", "sans-serif"],
      myriad: ["Myriad", "sans-serif"],
    },
    backgroundImage:{
      "f2-purple": "url('/public/purple.png')",
      "f2-mobile": "url('/public/f2-bg-mobile-no-bg.png')",
    }
  },
  plugins: [],
}