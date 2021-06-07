import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import mutations from '../../../apollo/mutations';
import { GET_CART } from '../../../apollo/queries';
import logoImage from '../../../assets/images/logo.png';
import { useMediaQuery } from '../../../utils';
import { Drawer } from '../../atoms';
import {
  CartButton, HamBurger, Logo, Nav,
} from '../../molecules';
import { CheckoutCart } from '../../pages';
import './Header.scss';
import metadata from './metadata.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useQuery(GET_CART);
  const { count, isCartOpen } = data?.cart;
  const { handleCart } = mutations;
  const location = useLocation();
  const history = useHistory();

  const isLaptop = useMediaQuery('(min-width: 769px)');
  const isMobile = useMediaQuery('(max-width: 481px)');
  const handleMenuBar = (isOpen, path = null) => {
    setIsMenuOpen(isOpen);
    if (path) history.push(path);
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) handleMenuBar(false);
    return () => {
      isCancelled = true;
    };
  }, [location]);

  return (
    <header className="header">
      <div className="header__sub__container">
        <div className="header--left-align">
          <Logo src={logoImage} className="logo" />
          <Nav
            className="header__nav__items"
            navElements={metadata?.headerNavigations?.mainNavs}
          />
        </div>
        <div className="header--right-align">
          <Nav
            className="header__auth__wrapper"
            navElements={metadata?.headerNavigations?.authNavs}
          />
          <CartButton
            cartCount={count}
            handleCartClick={() => handleCart(!isCartOpen)}
          />
        </div>
      </div>
      {/* form mobile menubar */}
      {isMobile && (
        <HamBurger
          isMenuOpen={isMenuOpen}
          handleMenuBar={handleMenuBar}
          items={[
            ...metadata?.headerNavigations?.mainNavs,
            ...metadata?.headerNavigations?.authNavs,
          ]}
        />
      )}
      {/* its for CheckoutCart Drawer */}
      <Drawer isOpen={isCartOpen} overlay={isLaptop}>
        <CheckoutCart />
      </Drawer>
    </header>
  );
};

export default Header;
