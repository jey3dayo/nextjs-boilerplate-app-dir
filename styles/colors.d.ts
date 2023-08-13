export interface Color {
  black: string;
  dark: string;
  medium: string;
  light: string;
  white: string;
  [key: string]: string | object;
}

export interface Colors {
  primary: Color;
  accent: Color;
}
