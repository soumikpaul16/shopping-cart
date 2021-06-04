import { useQuery } from '@apollo/client';
import React from 'react';
import logoImage from '../../../assets/images/logo.png';
import { CartButton, Logo, Nav } from '../../molecules';
import './Header.scss';
import metadata from './metadata.json';
import { GET_CART } from '../../../apollo/queries';
import mutations from '../../../apollo/mutations';
import { Drawer } from '../../atoms';
import { CheckoutCart } from '../../pages';
import { useMediaQuery } from '../../../utils';

const Header = () => {
  const { data } = useQuery(GET_CART);
  const { count, isCartOpen } = data?.cart;
  const { handleCart } = mutations;
  const isLaptop = useMediaQuery('(min-width: 769px)');

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
      {/* its for CheckoutCart Drawer */}
      <Drawer isOpen={isCartOpen} overlay={isLaptop}>
        <CheckoutCart />
      </Drawer>
    </header>
  );
};

export default Header;
