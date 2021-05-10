import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const RouteLink = ({ path, ...props }) => <Link to={`/${path}`} {...props} />;

RouteLink.propTypes = {
  path: PropTypes.string,
};
RouteLink.defaultProps = {
  path: '',
};

export default RouteLink;
