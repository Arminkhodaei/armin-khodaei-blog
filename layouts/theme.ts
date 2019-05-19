export enum Theme {
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
    item: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: 'white'
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

export default (theme: Theme) => {
  switch (theme) {
    case Theme.Light:
      return {
        ...light,
        mediaQueries: { ...mediaQueries }
      };
    case Theme.Dark:
      return {
        ...dark,
        mediaQueries: { ...mediaQueries }
      };
  }
};
