import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';
import { color, colors } from './styles/colors';

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
