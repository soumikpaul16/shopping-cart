import { RestLink } from 'apollo-link-rest';

export const restLink = new RestLink({
  uri: 'https://sabka-bazar-2021.herokuapp.com/',
  // will put in env file
});

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
    addToCart: {
      keyFields: [],
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
  },
};
