import { blackA, violet, mauve } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

export const colors = {
  primary: tailwindColors['neutral'],
  secondary: tailwindColors['gray'],
  accent: tailwindColors['teal'],
  ...radixUiColors,
};

export const color = {
  dark: tailwindColors['neutral']['600'],
  medium: tailwindColors['neutral']['400'],
  light: tailwindColors['neutral']['50'],
};

module.exports = {
  colors,
  color,
};
