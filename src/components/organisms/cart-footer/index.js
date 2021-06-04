import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Button } from '../../atoms';
import './CartFooter.scss';

const CartHeader = ({
  isCartEmpty, cart, totalCost, startShoppingPath,
}) => {
  const history = useHistory();
  return (
    <footer className="cart__footer">
      {!isCartEmpty && (
        <div className="cart__footer__content">
          <FormattedMessage id={cart?.footer.paymentAd} />
        </div>
      )}
      <Button
        className={classNames('cart__footer__button', {
          'cart__footer__button--center': isCartEmpty,
        })}
        onClick={() => {
          if (isCartEmpty) history.push(startShoppingPath);
        }}
      >
        <div>
          {isCartEmpty ? (
            <FormattedMessage id={cart?.footer.button.empty} />
          ) : (
            <FormattedMessage id={cart?.footer.button.notEmpty} />
          )}
        </div>
        {!isCartEmpty && (
          <div>
            <FormattedMessage id={cart?.currency} />
            {totalCost}
            <i className="cart__footer--right-arrow" />
          </div>
        )}
      </Button>
    </footer>
  );
};

CartHeader.propTypes = {
  isCartEmpty: PropTypes.bool,
  cart: PropTypes.object,
  totalCost: PropTypes.number,
  startShoppingPath: PropTypes.string,
};
CartHeader.defaultProps = {
  isCartEmpty: true,
  cart: {},
  totalCost: 0,
  startShoppingPath: '',
};
export default CartHeader;
