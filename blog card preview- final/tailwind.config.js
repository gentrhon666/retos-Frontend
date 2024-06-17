module.exports = {
  content: ["/src/**/*.{html,js}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellowpro: "#F4D04E",
        blackpro: "#000000",
        whitepro: "#FFFFFF",
        graypro: "##7F7F7F",
      },
      spacing: {
        card: "20.4rem",
      },
      lineHeight: {
        leadingpro: "150%",
      },
      boxShadow: {
        card: "8px 8px 0px 0px #000",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },

  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  // Add a comma here
};
