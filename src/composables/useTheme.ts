import { readonly, ref, Ref } from 'vue';

export const THEMES = {
  NUMBERS: 'numbers',
  ICONS: 'icons',
} as const;

type ThemeKeys = keyof typeof THEMES;
type Theme = typeof THEMES[ThemeKeys];
type ThemeRef = Ref<Theme>;

export interface ThemeInterface {
  theme: Readonly<ThemeRef>,
  setTheme: (newTheme: Theme) => void,
}

const theme: ThemeRef = ref(THEMES.NUMBERS);

export default function useTheme(): ThemeInterface {
  const setTheme: ThemeInterface['setTheme'] = (newTheme) => {
    theme.value = newTheme;
  };

  return {
    theme: readonly(theme),
    setTheme,
  };
}
