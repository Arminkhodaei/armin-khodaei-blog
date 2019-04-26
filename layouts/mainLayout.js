import React from 'react';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const mainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content body">{children}</div>
      <Footer />
    </div>
  );
};

export default mainLayout;
