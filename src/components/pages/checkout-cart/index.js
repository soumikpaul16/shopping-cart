import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import mutations from '../../../apollo/mutations';
import { GET_CART } from '../../../apollo/queries';
import { CartFooter, CartHeader, CartProductSection } from '../../organisms';
import './CheckoutCart.scss';
import metadata from './metadata.json';

const CheckoutCart = () => {
  const { data } = useQuery(GET_CART);

  const { products, count, totalCost } = data?.cart;
  const { addToCart, removeFromCart, handleCart } = mutations;
  const isCartEmpty = count === 0;
  const { cart } = metadata;

  return (
    <section
      className={classNames('cart', { 'cart__empty-wrapper': isCartEmpty })}
    >
      <CartHeader
        handleCart={handleCart}
        count={count}
        cart={cart}
        isCartEmpty={isCartEmpty}
      />
      {isCartEmpty && (
        <section className="cart__empty">
          <section className="cart__empty_content">
            <h4>
              <FormattedMessage id={cart.emptyCart.header} />
            </h4>
            <div>
              <FormattedMessage id={cart.emptyCart.content} />
            </div>
          </section>
        </section>
      )}
      {!isCartEmpty && (
        <>
          <div className="cart__products">
            {Object.values(products).map((product) => (
              <CartProductSection
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
            <section className="cart__lowest-price-wrap">
              <img src={cart.cheaperAdImage.path} alt="lowest" />
              <FormattedMessage id={cart.cheaperAd} />
            </section>
          </div>
        </>
      )}
      <CartFooter
        totalCost={totalCost}
        cart={cart}
        isCartEmpty={isCartEmpty}
        startShoppingPath="/products"
      />
    </section>
  );
};

CheckoutCart.propTypes = {};
CheckoutCart.defaultProps = {};

export default CheckoutCart;
