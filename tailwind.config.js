const { resolve } = require('path');
const colorsPath = resolve(__dirname, 'styles/colors.ts');
const { colors, color } = require(colorsPath);
const containerQueries = require('@tailwindcss/container-queries');
const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
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
