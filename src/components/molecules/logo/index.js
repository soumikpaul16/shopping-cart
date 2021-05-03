import React from 'react';
import './logo.scss';
import { Image } from '../../atoms';
import logo from '../../../assets/images/logo.png';

const Logo = () => (
  <div className="logo">
    <Image className="logo__image" src={logo} alt="logo" />
  </div>
);

export default Logo;
