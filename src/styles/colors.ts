import { blackA, violet, mauve } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

export const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

const primaryColor = 'neutral';

export const colors = {
  primary: tailwindColors[primaryColor],
  accent: tailwindColors['teal'],
  ...radixUiColors,
};

export const color = {
  dark: tailwindColors[primaryColor]['600'],
  medium: tailwindColors[primaryColor]['400'],
  light: tailwindColors[primaryColor]['50'],
};

module.exports = {
  colors,
  color,
};
