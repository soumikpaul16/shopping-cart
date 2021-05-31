import { PropTypes } from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import useMediaQuery from '../../../utils/useMediaQuery';
import { Button, Image } from '../../atoms';
import metadata from './metadata.json';
import './ProductCard.scss';

const ProductCard = ({ data, handleClick }) => {
  const laptop = useMediaQuery('(min-width: 769px)'); // for laptops
  return (
    <div className="product-card">
      <h4 className="product-card__name" title={data.name}>
        {data.name}
      </h4>
      <div className="product-card__details">
        <Image
          className="product-card__details__image"
          src={data.imageURL}
          alt={data.name}
        />

        <div
          className="product-card__details__description"
          title={data.description}
        >
          <div className="product-card__details__description__content">
            {data.description}
          </div>
        </div>
        {laptop ? (
          <div className="product-card__details--desktop">
            <div className="product-card__details__price">{`MRP Rs.${data.price}`}</div>
            <Button
              aria-label={`click to buy ${data.name} with price ${data.price}`}
              className="product-card__details__button"
              onClick={() => handleClick(data)}
            >
              <FormattedMessage id={metadata?.productCard.buyNow.id} />
            </Button>
          </div>
        ) : (
          <Button
            aria-label={`click to buy ${data.name} with price ${data.price}`}
            className="product-card__details--mobile product-card__details__button"
            onClick={() => handleClick(data)}
          >
            <FormattedMessage id={metadata?.productCard.buyNow.id} />
            {` @ Rs.${data.price}`}
          </Button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};

ProductCard.defaultProps = {
  data: {},
  handleClick: () => {},
};

export default ProductCard;
