import React from 'react';
import { Logo } from '../../molecules';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__sub__container">
      <Logo />
      <nav className="header__nav__items">
        <span className="header__nav__items__link">Home</span>
        <span className="header__nav__items__link">Products</span>
      </nav>
      <nav className="header__auth__wrapper">
        <span className="header__auth__wrapper__link sign-in">SignIn</span>
        <span className="header__auth__wrapper__link">Register</span>
      </nav>
    </div>
  </header>
);

export default Header;
