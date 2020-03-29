import React from 'react';
import styled from '../../layouts/theme';

const Footer = styled.footer`
  background-color: lightgray;
  padding: 0 2em;
`;

export default () => {
  return <Footer className="footer">This is the footer</Footer>;
};
