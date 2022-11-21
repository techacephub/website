/** @type {import('tailwindcss').Config} */
const tailwindcss = require("tailwindcss");
const plugin = require("tailwindcss/plugin");

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

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
    extend: {
      colors: {
        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),
      },
      screens: {
        "4xl": "2560px",
      },
    },
  },
  plugins: [tailwindcss, backfaceVisibility],
};
