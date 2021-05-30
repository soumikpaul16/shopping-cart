import { RestLink } from 'apollo-link-rest';
import { makeVar } from '@apollo/client';

export const restLink = new RestLink({
  uri: 'https://sabka-bazar-2021.herokuapp.com/',
  // will put in env file
});

/**
 * Set initial values when we create cache variables.
 */

const cartInitialValue = {
  count: 0,
  totalCost: 0,
  products: {},
  isCartOpen: false,
};

export const cartVar = makeVar(cartInitialValue);
export const cache = {
  typePolicies: {
    products: {
      keyFields: [
        'name',
        'imageURL',
        'description',
        'price',
        'stock',
        'category',
        'sku',
        'id',
      ],
    },
    categories: {
      keyFields: [
        'name',
        'key',
        'description',
        'enabled',
        'order',
        'imageUrl',
        'id',
      ],
    },
    banners: {
      keyFields: [
        'bannerImageUrl',
        'bannerImageAlt',
        'isActive',
        'order',
        'id',
      ],
    },
    Query: {
      fields: {
        cart: {
          read() {
            return cartVar();
          },
        },
      },
    },
  },
};
