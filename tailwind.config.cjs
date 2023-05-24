/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1c2021",
        secondary: "#96a2a3",
        // "#678082", #96a2a3 card / field bg - #535859
        tertiary: "#151617",
        quarterary: "#DCD7C9",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 5px 25px -15px #ede8da",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg4.svg')",
      },
    },
  },
  plugins: [],
};
