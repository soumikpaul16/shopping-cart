import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const propTypes = {
  path: PropTypes.string,
};

const defaultProps = {
  path: '',
};

// eslint-disable-next-line jsx-a11y/alt-text
const RouteLink = ({ path, ...props }) => <Link to={`/${path}`} {...props} />;

RouteLink.propTypes = propTypes;
RouteLink.defaultProps = defaultProps;

export default RouteLink;
