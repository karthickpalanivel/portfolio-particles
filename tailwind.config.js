/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 THIS IS THE MAGIC LINE
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      listStyleImage: {
        whiteTick: 'url("/src/assets/images/whiteTick.png")', // Note: we might need a blackTick for light mode later!
      },
    },
  },
  plugins: [],
};
