/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "0px 25px 25px 0px  rgba(0, 0, 0, 0.05)",
      },
      colors: {
        "Light-Grey": "#D5E1EF",
        "Dark-Navy": "#1F314F",
        "grey-per": "#7D889E",
      },
    },
  },
  plugins: [],
};
