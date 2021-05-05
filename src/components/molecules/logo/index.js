import { PropTypes } from 'prop-types';
import React from 'react';
import { Image, RouteLink } from '../../atoms';
import './logo.scss';

export const propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  src: '',
  className: '',
};

const Logo = ({ src, className }) => (
  <RouteLink className={className}>
    <Image className="logo__image" src={src} alt="logo" />
  </RouteLink>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
