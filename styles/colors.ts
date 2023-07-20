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
  white: tailwindColors['neutral']['50'],
};

export const colors = {
  primary: tailwindColors[primaryColor],
  accent: tailwindColors[accentColor],
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  hue: color,
  ...radixUiColors,
};
