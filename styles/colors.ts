import tailwindColors from 'tailwindcss/colors';

export const grayColor = 'neutral';
export const radixGrayColor = 'mauve';
export const accentColor = 'violet';

// TODO: radix-colorによるアクセスを考慮
export const color = {
  black: tailwindColors[grayColor]['950'],
  dark: tailwindColors[grayColor]['800'],
  medium: tailwindColors[grayColor]['500'],
  light: tailwindColors[grayColor]['100'],
  white: tailwindColors[grayColor]['50'],
};
