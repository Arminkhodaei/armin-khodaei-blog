import React, { ReactNode } from 'react';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const mainLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content body">{children}</div>
      <Footer />
    </div>
  );
};

export default mainLayout;
