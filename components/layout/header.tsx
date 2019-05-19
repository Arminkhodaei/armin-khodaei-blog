import Head from 'next/head';
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// general css files
import '../../embedded/css/normalize.css';
import '../../embedded/css/general.css';
// font related css files
import '../../embedded/css/inter.css';

const NavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${props => props.theme.mediaQueries.small} {
    justify-content: center;
    flex-direction: column;
  }
  ${props => props.theme.mediaQueries.medium} {
    justify-content: center;
    flex-direction: column;
  }
  ${props => props.theme.mediaQueries.large} {
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
    background-color: ${props => props.theme.menu.item.backgroundColor};
    transition: background-color 0.5s;
  }
  & ul > li:hover {
    background-color: ${props => props.theme.menu.item.hoverBackgroundColor};
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
    color: ${props => props.theme.text.color.light};
  }
`;

const Title = styled.h3`
  & > a {
    text-decoration: none;
    color: ${props => props.theme.text.color.normal};
  }
`;

const SubTitle = styled.p`
  font-size: 0.8em;
  color: ${props => props.theme.text.color.light};

  ${props => props.theme.mediaQueries.small} {
    text-align: center;
  }
  ${props => props.theme.mediaQueries.medium} {
    text-align: center;
  }
`;

const Header = styled.div`
  background-color: lightblue;
  padding: 0 2em;
`;

export default () => {
  return (
    <Header className="header">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
          <a href="/">Armin Khodaei</a>
        </Title>
      </NavMenu>
      <SubTitle>Software engineer, developer, and AI enthusiast...</SubTitle>
    </Header>
  );
};
