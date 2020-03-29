import React, { ReactNode } from 'react';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import { ThemeProvider } from './theme/ThemeProvider';

import styled from '../layouts/theme';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  ${(props) => props.theme.mediaQueries.small} {
    width: 100%;
  }
  ${(props) => props.theme.mediaQueries.medium} {
    width: 70%;
  }
  ${(props) => props.theme.mediaQueries.large} {
    width: 50%;
  }
`;

const Content = styled.div`
  background-color: lightgreen;
  padding: 0 2em;
`;

const Main: React.FC<ReactNode> = ({ children }) => {
  return (
    <ThemeProvider>
      <Body>
        <Header />
        <Content className="content">{children}</Content>
        <Footer />
      </Body>
    </ThemeProvider>
  );
};

export default Main;
