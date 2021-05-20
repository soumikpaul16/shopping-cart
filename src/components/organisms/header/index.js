import React from 'react';
import { Logo, Nav } from '../../molecules';
import './Header.scss';
import logoImage from '../../../assets/images/logo.png';
import metadata from './metadata.json';

const Header = () => (
  <header className="header">
    <div className="header__sub__container">
      <div className="header--left-align">
        <Logo src={logoImage} className="logo" />
        <Nav className="header__nav__items" navElements={metadata?.headerNavigations?.mainNavs} />
      </div>
      <div>
        <Nav
          className="header__auth__wrapper"
          navElements={metadata?.headerNavigations?.authNavs}
        />
      </div>
    </div>
  </header>
);

export default Header;
