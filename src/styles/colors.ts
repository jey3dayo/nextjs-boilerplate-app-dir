import { blackA, violet, mauve } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

export const colors = {
  // palettes
  primary: tailwindColors['neutral'],
  secondary: tailwindColors['gray'],
  accent: tailwindColors['teal'],

  // colors
  dark: tailwindColors['neutral']['600'],
  medium: tailwindColors['neutral']['400'],
  light: tailwindColors['neutral']['50'],

  ...radixUiColors,
};

module.exports = {
  colors,
};
