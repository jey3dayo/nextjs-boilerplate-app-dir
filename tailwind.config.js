const { resolve } = require('path');
const colorsPath = resolve(__dirname, 'src/styles/colors.ts');
const { colors, color } = require(colorsPath);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      textColor: color,
      backgroundColor: color,
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
};
