/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- very important
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
