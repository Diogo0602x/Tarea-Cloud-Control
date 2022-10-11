/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 5px 5px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'background': "url('/assets/background.svg')"
      },
      colors: {
        primary: "#595a5c ",
        secondary: "#FEBA12",
      },
      fontFamily: {
        poppins: ["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px"
    },
  },
  plugins: [],
};
