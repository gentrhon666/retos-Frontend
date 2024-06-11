module.exports = {
  content: ["/src/**/*.{html,js}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandyred: "#854632",
        DarkCharcoal: "#312E2C",
        WengeBrown: "#5F564D",
        DarkRaspberry: "#7A284E",
        Eggshell: "#F3E5D7",
      },
      lineHeight: {
        extrahard: "150%",
        hard: "100%",
      },

      spacing: {
        664: "311px",
        666: "23.5rem",
        667: "45.70rem",
        667: "40.999rem",
        668: "46rem",
      },
      fontFamily: {
        youth: ["Young Serif"],
        outfit: ["Outfit"],
      },
    },
  },

  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  // Add a comma here
};
