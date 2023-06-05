import { blackA, violet, mauve } from '@radix-ui/colors';
import palette from 'tailwindcss/colors';

const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

export const colors = {
  primary: palette['neutral'],
  secondary: palette['gray'],
  accent: palette['teal'],
  dark: palette['neutral']['600'],
  light: palette['neutral']['50'],
  ...radixUiColors,
};

module.exports = colors;
