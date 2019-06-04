export interface ITheme {
  mode: ThemeMode;
  styles: object;
  toggle(): void;
}

export enum ThemeMode {
  Light,
  Dark
}

export const mediaQueries = {
  small: '@media(max-width: 576px)',
  medium: '@media(min-width: 577px) and (max-width: 992px)',
  large: '@media(min-width: 993px)'
};

const light = {
  text: {
    color: {
      light: '#797979',
      normal: '#464646',
      dark: '#000000'
    }
  },
  menu: {
    color: '#ededed',
    item: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: '#5a5a5a'
    }
  }
};

const dark = {
  text: {
    color: {
      light: '#797979',
      normal: '#464646',
      dark: '#000000'
    }
  },
  menu: {
    item: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: 'white'
    }
  }
};

export const ThemeMaker = (theme: ThemeMode) => {
  switch (theme) {
    case ThemeMode.Light:
      return {
        ...light,
        mediaQueries: { ...mediaQueries }
      };
    case ThemeMode.Dark:
      return {
        ...dark,
        mediaQueries: { ...mediaQueries }
      };
  }
};
