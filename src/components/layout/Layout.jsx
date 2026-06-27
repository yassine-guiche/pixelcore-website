import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Background from './Background';
import ScrollProgress from './ScrollProgress';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Background />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
