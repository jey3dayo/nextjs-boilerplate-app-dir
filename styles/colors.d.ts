export interface Color {
  dark: string;
  medium: string;
  light: string;
  [key: string]: string | object;
}

export const RadixUiColors: Color;

export interface Colors {
  primary: Color;
  accent: Color;
}