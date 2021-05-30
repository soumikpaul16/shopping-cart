import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../utils';
import mutations from '../apollo/mutations';
import { GET_CART } from '../apollo/queries';
import AppRouter from '../AppRouter';
import { Drawer } from './atoms';
import './Layout.scss';
import { Footer, Header } from './organisms';
import { CheckoutCart } from './pages';

const Layout = () => {
  const location = useLocation();
  const { handleCart } = mutations;
  const { data } = useQuery(GET_CART);
  const notLaptop = useMediaQuery('(min-width: 769px)');

  useEffect(() => {
    window.scrollTo(0, 0);
    handleCart(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = data?.cart.isCartOpen ? 'hidden' : 'unset';
  }, [data]);

  return (
    <>
      <Header />
      <main className="layout__container">
        <AppRouter />
        <Drawer isOpen={data?.cart.isCartOpen} overlay={notLaptop}>
          <CheckoutCart />
        </Drawer>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
