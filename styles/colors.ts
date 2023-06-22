import { blackA, mauve, violet } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

const primaryColor = 'neutral';
const accentColor = 'sky';

export const colors = {
  primary: tailwindColors[primaryColor],
  accent: tailwindColors[accentColor],
  ...radixUiColors,
};

export const color = {
  dark: tailwindColors[primaryColor]['800'],
  medium: tailwindColors[primaryColor]['500'],
  light: tailwindColors[primaryColor]['100'],
};

module.exports = {
  colors,
  color,
};
