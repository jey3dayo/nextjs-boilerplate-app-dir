import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
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
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors,

      // TODO: colorsにまとめる
      textColor: color,
      backgroundColor: color,
      ringColor: color,
      borderColor: color,
      fill: color,
      boxShadowColor: color,
    },
  },
  plugins: [containerQueries, animate, typography, forms],
};
