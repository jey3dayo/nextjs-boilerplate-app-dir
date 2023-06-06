import { blackA, violet, mauve } from '@radix-ui/colors';
import tailwindColors from 'tailwindcss/colors';

const radixUiColors = {
  ...blackA,
  ...violet,
  ...mauve,
};

export const colors = {
  primary: tailwindColors['neutral'],
  secondary: tailwindColors['gray'],
  accent: tailwindColors['teal'],
  dark: tailwindColors['neutral']['600'],
  light: tailwindColors['neutral']['50'],
  ...radixUiColors,
};

export default colors;
