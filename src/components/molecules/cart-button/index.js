import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, CartIcon } from '../../atoms';
import './CartButton.scss';
import metadata from './metadata.json';

const CartButton = ({ cartCount, handleCartClick, className }) => (
  <Button
    role="navigation"
    aria-label="cart Button"
    className={classNames(className, 'header__cart')}
    onClick={handleCartClick}
  >
    <CartIcon className="header__cart__image" />
    <span className="header__cart__text">
      {cartCount}
      {' '}
      <FormattedMessage
        id={cartCount === 1 ? metadata?.cart.item : metadata?.cart.items}
      />
    </span>
  </Button>
);

CartButton.propTypes = {
  cartCount: PropTypes.number,
  handleCartClick: PropTypes.func,
  className: PropTypes.string,
};
CartButton.defaultProps = {
  cartCount: 0,
  handleCartClick: () => {},
  className: '',
};

export default CartButton;
