import { blackA, violet, mauve } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

export const baseColor = 'neutral';
export const colors = {
  // palettes
  primary: tailwindColors[baseColor],
  secondary: tailwindColors['gray'],
  accent: tailwindColors['teal'],

  // colors
  dark: tailwindColors[baseColor]['600'],
  medium: tailwindColors[baseColor]['400'],
  light: tailwindColors[baseColor]['50'],
  ...radixUiColors,
};

module.exports = {
  colors,
};
