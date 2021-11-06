export const colors = ['primary', 'secondary'] as const;
export const shades = ['dark', 'normal', 'light'] as const;
export const sizes = ['small', 'medium'] as const;

type Shade = typeof shades[number];
type Color = typeof colors[number];
type Size = typeof sizes[number];

type Shades = {
  [shade in Shade]?: string;
} & {
  normal: string;
};

export interface Theme {
  color: {
    [color in Color]: Shades;
  },
  size: {
    padding: {
      [size in Size]: string;
    },
    font: {
      [size in Size]: string;
    }
  }
}
