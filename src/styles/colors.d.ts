export interface Color {
  [key: string]: string | object;
}

export const RadixUiColors: Color;

export interface Colors {
  primary: Color;
  secondary: Color;
  accent: Color;
  dark: string;
  light: string;
}
