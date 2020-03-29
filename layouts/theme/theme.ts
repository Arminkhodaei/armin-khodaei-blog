export interface ITheme {
  mode: ThemeModes;
  styles: ThemeStyles;
  toggle(): void;
}

export type ThemeStyles = {
  mediaQueries: typeof mediaQueries;
} & (typeof light | typeof dark);

export enum ThemeModes {
  Light,
  Dark,
}

export const mediaQueries = {
  small: '@media(max-width: 576px)',
  medium: '@media(min-width: 577px) and (max-width: 992px)',
  large: '@media(min-width: 993px)',
};

const light = {
  text: {
    color: {
      light: '#797979',
      normal: '#464646',
      dark: '#000000',
    },
  },
  menu: {
    color: '#ededed',
    item: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: '#5a5a5a',
    },
  },
};

const dark = {
  text: {
    color: {
      light: '#797979',
      normal: '#464646',
      dark: '#000000',
    },
  },
  menu: {
    color: '#ededed',
    item: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: 'white',
    },
  },
};

export const ThemeMaker = (theme: ThemeModes): ThemeStyles => {
  switch (theme) {
    case ThemeModes.Light:
      return {
        ...light,
        mediaQueries,
      };
    case ThemeModes.Dark:
      return {
        ...dark,
        mediaQueries,
      };
  }
};
