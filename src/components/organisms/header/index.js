import React from 'react';
import { Logo } from '../../molecules';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__sub__container">
      <Logo />
    </div>
  </div>
);

export default Header;
