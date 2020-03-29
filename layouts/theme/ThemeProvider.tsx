import React, { ReactNode, useState } from 'react';
import { ThemeMaker, ThemeModes, ITheme } from './theme';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

export const ThemeContext = React.createContext({} as ITheme);

export const ThemeProvider: React.FC<ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState({
    styles: ThemeMaker(ThemeModes.Light),
    mode: ThemeModes.Light,
  } as ITheme);

  function toggle() {
    setTheme({
      ...theme,
      styles: ThemeMaker(
        theme.mode === ThemeModes.Light ? ThemeModes.Dark : ThemeModes.Light
      ),
      mode:
        theme.mode === ThemeModes.Light ? ThemeModes.Dark : ThemeModes.Light,
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        toggle,
      }}
    >
      <EmotionThemeProvider theme={theme.styles}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
