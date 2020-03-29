import Head from 'next/head';
import React from 'react';
import styled from '../../layouts/theme';

const NavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${(props) => props.theme.mediaQueries.small} {
    justify-content: center;
    flex-direction: column;
  }
  ${(props) => props.theme.mediaQueries.medium} {
    justify-content: center;
    flex-direction: column;
  }
  ${(props) => props.theme.mediaQueries.large} {
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  & ul {
    list-style-type: none;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  & ul > li {
    display: flex;
    align-items: center;
    margin: 0 4px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.menu.item.backgroundColor};
    transition: background-color 0.5s;
  }
  & ul > li:hover {
    background-color: ${(props) => props.theme.menu.item.hoverBackgroundColor};
  }
  & ul > li:last-of-type {
    margin-right: 0;
  }
  & ul > li:first-of-type {
    margin-left: 0;
  }

  & ul > li > a {
    padding: 7px 10px;
    text-decoration: none;
    font-size: 0.85em;
    font-weight: 500;
    color: ${(props) => props.theme.menu.color};
  }
`;

const Title = styled.h2`
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.menu.color};
  }
`;

const SubTitle = styled.p`
  font-size: 0.75em;
  color: ${(props) => props.theme.menu.color};

  ${(props) => props.theme.mediaQueries.small} {
    text-align: center;
  }
  ${(props) => props.theme.mediaQueries.medium} {
    text-align: center;
  }
`;

const Header = styled.div`
  background-color: #2c2c2c;
  padding: 0 2em;
`;

export default () => {
  const title: string = 'Armin Khodaei';

  return (
    <Header className="header">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <NavMenu>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/cv">C.V.</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <Title>
          <a href="/">{title}</a>
        </Title>
      </NavMenu>
      <SubTitle>Software Engineer, Developer, and AI enthusiast...</SubTitle>
    </Header>
  );
};
