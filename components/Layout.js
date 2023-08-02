import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>{children}</main>
    </div>
  );
};

export default Layout;
