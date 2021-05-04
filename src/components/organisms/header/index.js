import classNames from 'classnames';
import React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import { Logo } from '../../molecules';
import './header.scss';

const mainNavs = [
  { id: 'header.home', className: '' },
  { id: 'header.products', className: '' },
];
const authNavs = [
  { id: 'header.sign_in', className: 'sign-in' },
  { id: 'header.register', className: '' },
];

const Header = () => (
  <header className="header">
    <div className="header__sub__container">
      <Logo />
      {/* will be making a different atom/molecule for nav and carts. */}
      <nav className="header__nav__items">
        {mainNavs.map((element) => (<span key={element.id} className={classNames('header__nav__items__link', element.className)}><FormattedMessage id={element.id} /></span>))}
      </nav>
      <nav className="header__auth__wrapper">
        {authNavs.map((element) => (<span key={element.id} className={classNames('header__auth__wrapper__link', element.className)}><FormattedMessage id={element.id} /></span>))}
      </nav>
    </div>
  </header>
);

export default Header;
