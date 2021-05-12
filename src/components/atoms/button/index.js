import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({ className, onClick, ...props }) => (
  <button
    onClick={onClick}
    className={classNames(className, 'button')}
    {...props}
  />
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
