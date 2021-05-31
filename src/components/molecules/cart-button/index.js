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
    className={classNames(className, 'cart')}
    onClick={handleCartClick}
  >
    <CartIcon className="cart__image" />
    <span className="cart__text">
      {cartCount}
      {' '}
      <FormattedMessage
        id={cartCount === 1 ? metadata?.cart.item.id : metadata?.cart.items.id}
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
