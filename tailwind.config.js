/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wpBg: "#212121",
        wpPrimary: "#efefee",
        wpSecondary: "#f05a3f",
        wpGray: "#363535",
      },
    },
  },
  plugins: [],
};
