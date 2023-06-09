const { resolve } = require('path');
const colorsPath = resolve(__dirname, 'src/styles/colors.ts');
const { colors, color } = require(colorsPath);

const containerQueries = require('@tailwindcss/container-queries');
const animate = require('tailwindcss-animate');

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

      // TODO: 問題があればcolorsにまとめる
      textColor: color,
      backgroundColor: color,
      ringColor: color,
      borderColor: color,
      fill: color,
      boxShadowColor: color,
    },
  },
  plugins: [containerQueries, animate],
};
