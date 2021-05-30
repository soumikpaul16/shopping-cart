import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../atoms';
import './CartHeader.scss';

const CartHeader = ({
  isCartEmpty, cart, count, handleCart,
}) => (
  <header
    className={classNames('cart__header', {
      cart__header__empty: isCartEmpty,
    })}
  >
    <FormattedMessage id={cart?.myCart} />
    {!isCartEmpty && (
      <span>
        {` (${count} `}
        {count === 1 ? (
          <FormattedMessage id={cart?.item} />
        ) : (
          <FormattedMessage id={cart?.items} />
        )}
        )
      </span>
    )}
    <Button className="cart__header__cross" onClick={() => handleCart(false)}>
      X
    </Button>
  </header>
);

CartHeader.propTypes = {
  isCartEmpty: PropTypes.bool,
  cart: PropTypes.object,
  count: PropTypes.number,
  handleCart: PropTypes.func,
};
CartHeader.defaultProps = {
  isCartEmpty: true,
  cart: {},
  count: 0,
  handleCart: () => {},
};
export default CartHeader;
