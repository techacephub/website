/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // mode: "jit",
  // purge: [
  //   "./assets/**/*.{css}",
  //   "./components/*.{vue,js}",
  //   "./components/**/*.{vue,js}",
  //   "./pages/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./*.{vue,js,ts}",
  //   "./nuxt.config.{js,ts}",
  // ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss],
}
