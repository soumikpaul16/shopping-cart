import { PropTypes } from 'prop-types';
import React from 'react';
import { Image, RouteLink } from '../../atoms';
import './logo.scss';

const Logo = ({ src, className }) => (
  <RouteLink className={className}>
    <Image className="logo__image" src={src} alt="logo" />
  </RouteLink>
);

Logo.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
Logo.defaultProps = {
  src: '',
  className: '',
};

export default Logo;
