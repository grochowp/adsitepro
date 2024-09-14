/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoFlex: ['"Roboto Flex"', "sans-serif"],
        robotoCondensed: ['"Roboto Condensed"', "sans-serif"],
        bebasNeue: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
