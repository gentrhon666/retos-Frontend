module.exports = {
  content: ["/src/**/*.{html,js}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
  },

  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  // Add a comma here
};
