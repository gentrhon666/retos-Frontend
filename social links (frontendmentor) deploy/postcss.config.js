module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  cssnano: { preset: "default" },
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
};
