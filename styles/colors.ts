import { blackA, green, mauve, slate, violet } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
  ...slate,
  ...green,
};

const primaryColor = 'neutral';
const accentColor = 'sky';

// TODO: hue-dark, hue-medium, hue-lightでアクセスする
export const color = {
  black: tailwindColors[primaryColor]['950'],
  dark: tailwindColors[primaryColor]['800'],
  medium: tailwindColors[primaryColor]['500'],
  light: tailwindColors[primaryColor]['100'],
  white: tailwindColors[primaryColor]['50'],
};

export const colors = {
  accentcolor: tailwindColors[accentColor],
  graycolor: tailwindColors[grayColor],
  hue: color,
  ...radixUiColors,

  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
};
