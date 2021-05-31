import { useQuery } from '@apollo/client';
import React from 'react';
import logoImage from '../../../assets/images/logo.png';
import { CartButton, Logo, Nav } from '../../molecules';
import './Header.scss';
import metadata from './metadata.json';
import { GET_CART } from '../../../apollo/queries';

const Header = () => {
  const { data } = useQuery(GET_CART);
  console.log('data', data);
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
          <CartButton cartCount={data ? data.cart.count : 0} />
        </div>
      </div>
    </header>
  );
};

export default Header;
