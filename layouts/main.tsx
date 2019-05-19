import React, { ReactNode } from 'react';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import ThemeMaker, { Theme } from './theme';

import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

const theme = ThemeMaker(Theme.Light);

const Content = styled.div`
  background-color: lightgreen;
  padding: 0 2em;
`;

const Main: React.FC<ReactNode> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: auto;
          ${theme.mediaQueries.small} {
            width: 100%;
          }
          ${theme.mediaQueries.medium} {
            width: 70%;
          }
          ${theme.mediaQueries.large} {
            width: 50%;
          }
        `}
      >
        <Header />
        <Content className="content">{children}</Content>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Main;
