export type Color = 'primary' | 'secondary';
export type Shade = 'dark' | 'normal' | 'light';
export type Size = 'small' | 'medium';

export type Shades = {
  [shade in Shade]?: string;
} & {
  normal: string;
};

export interface Props {
  tag?: string,
  color?: Color,
  shade?: Shade,
  size?: Size,
}

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
