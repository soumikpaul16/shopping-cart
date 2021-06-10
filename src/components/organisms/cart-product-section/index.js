import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../../atoms';
import './CartProductSection.scss';

const CartHeader = ({
  product, addToCart, removeFromCart, ...props
}) => (
  <section key={product?.id} className="cart__products__section" {...props}>
    <img src={product?.imageURL} alt={product?.name} />
    <div className="cart__products__section__description">
      <h4>{product?.name}</h4>
      <div className="cart__products__section__description__action-wrap">
        <Button
          className="cart__products__section__description__action-wrap__button"
          onClick={() => {
            removeFromCart(product?.id);
          }}
        >
          -
        </Button>
        {product?.qty}
        <Button
          className="cart__products__section__description__action-wrap__button"
          disabled={product?.qty === product?.stock}
          onClick={() => {
            addToCart(product);
          }}
        >
          +
        </Button>
        <div>x</div>
        <div className="cart__products__section__description__action-wrap__price">{`Rs. ${product?.price}`}</div>
      </div>
    </div>
    <div className="cart__products__section__total-price">{`Rs. ${product?.totalPrice}`}</div>
  </section>
);

CartHeader.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};
CartHeader.defaultProps = {
  product: {},
  addToCart: () => {},
  removeFromCart: () => {},
};
export default CartHeader;
