/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },listStyleImage: {
        whiteTick: 'url("/src/assets/images/whiteTick.png")',
      },
    },
  },
  plugins: [],
};
