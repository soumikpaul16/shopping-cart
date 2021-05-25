import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from '../AppRouter';
import { Footer, Header } from './organisms';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <main className="container">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
