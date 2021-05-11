import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = ({
  className, onClick, children, ...props
}) => (
  <button onClick={onClick} className={classNames(className, 'button')} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};
Button.defaultProps = {
  className: '',
  onClick: () => {},
  children: '',
};

export default Button;
