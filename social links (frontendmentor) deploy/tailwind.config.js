/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verdelima: "#C5F82A",
        grisboton: "#333333",
        fondo: "#141414",
        card: "#1F1F1F",
        texto: "#FFFFFF",
      },
      spacing: {
        movil: "24.75rem",
        card: "20.377rem",
        cardlargo: "36.1594rem",
        contenedorboton: "17.6rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  ],
};
