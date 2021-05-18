import { gql } from 'apollo-boost';

const GET_CATEGORIES = gql`
  query getCategories {
    get @rest(type: "get", path: "categories") {
      name
      key
      description
      enabled
      order
      imageUrl
      id
    }
  }
`;

const GET_PRODUCTS = gql`
  query getProducts {
    get @rest(type: "get", path: "products") {
      data
    }
  }
`;

const GET_BANNERS = gql`
  query getBanners {
    get @rest(type: "get", path: "banners") {
      bannerImageUrl
      bannerImageAlt
      isActive
      order
      id
    }
  }
`;

const GET_CART = gql`
  query getAddToChart {
    person @rest(type: "get", path: "addToChart") {
      data
    }
  }
`;

export {
  GET_CATEGORIES, GET_CART, GET_PRODUCTS, GET_BANNERS,
};
