/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { paper: "#DCE4F2", ink: "#10204A", cobalt: "#2B4BFF", sun: "#FFC93C" },
    },
  },
  plugins: [],
};
