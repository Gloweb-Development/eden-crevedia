/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,js}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Poppins", "serif"],
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
