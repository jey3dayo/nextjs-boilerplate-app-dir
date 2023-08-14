import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';
import windyRadixPalette from 'windy-radix-palette';
import { toRadixVar, toRadixVars } from 'windy-radix-palette/vars';
import windyRadixTypography from 'windy-radix-typography';
import { accentColor, color, colors, radixGrayColor } from './styles/colors';

/** @type {import('tailwindcss').Config} */
const config = {
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
      textColor: {
        ...color,
        // TODO: removed theme, theme-inverse
        theme: toRadixVar(radixGrayColor, 12),
        description: toRadixVar(accentColor, 11),
        'theme-inverse': toRadixVar(radixGrayColor, 1),
        'theme-accent': toRadixVar(accentColor, 11),
      },
      backgroundColor: {
        ...color,
        theme: toRadixVar(radixGrayColor, 2),
        'theme-inverse': toRadixVar(radixGrayColor, 9),
        'theme-neutral': toRadixVar(radixGrayColor, 9),
        'theme-accent': toRadixVar(accentColor, 8),
        'theme-accent': toRadixVar(accentColor, 8),
      },
      ringColor: color,
      borderColor: color,
      fill: color,
      boxShadowColor: color,

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [containerQueries, animate, typography, forms, windyRadixPalette, windyRadixTypography],
};

export default config;
