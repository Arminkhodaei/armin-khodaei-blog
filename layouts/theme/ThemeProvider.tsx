import React, { ReactNode, useState } from 'react';
import { ThemeMaker, ThemeMode, ITheme } from './theme';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

export const ThemeContext = React.createContext({} as ITheme);

export const ThemeProvider: React.FC<ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState({
    styles: ThemeMaker(ThemeMode.Light),
    mode: ThemeMode.Light
  } as ITheme);

  function toggle() {
    setTheme({
      ...theme,
      styles: ThemeMaker(
        theme.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
      ),
      mode: theme.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        toggle
      }}
    >
      <EmotionThemeProvider theme={theme.styles}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
