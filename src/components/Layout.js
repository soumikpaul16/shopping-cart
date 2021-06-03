import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mutations from '../apollo/mutations';
import AppRouter from '../AppRouter';
import './Layout.scss';
import { Footer, Header } from './organisms';

const Layout = () => {
  const location = useLocation();
  const { handleCart } = mutations;

  useEffect(() => {
    window.scrollTo(0, 0);
    handleCart(false);
  }, [location]);

  return (
    <>
      <Header />
      <main className="layout__container">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
