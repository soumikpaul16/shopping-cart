import React from 'react';
import { Logo, Nav } from '../../molecules';
import './header.scss';
import logoImage from '../../../assets/images/logo.png';

const mainNavs = [
  { id: 'header.home', path: '', className: 'header__nav__items__link' },
  {
    id: 'header.products',
    path: 'products',
    className: 'header__nav__items__link',
  },
];
const authNavs = [
  {
    id: 'header.sign_in',
    path: 'signIn',
    className: 'header__auth__wrapper__link header__auth__wrapper--space-right',
  },
  {
    id: 'header.register',
    path: 'register',
    className: 'header__auth__wrapper__link',
  },
];

const Header = () => (
  <header className="header">
    <div className="header__sub__container">
      <div className="header--flex">
        <Logo src={logoImage} className="logo" />
        <Nav className="header__nav__items" navElements={mainNavs} />
      </div>
      <div>
        <Nav className="header__auth__wrapper" navElements={authNavs} />
      </div>
    </div>
  </header>
);

export default Header;
