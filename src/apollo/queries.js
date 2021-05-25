import { gql } from 'apollo-boost';

const GET_CATEGORIES = gql`
  query getCategories {
    categories @rest(type: "categories", path: "categories") {
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
    products @rest(type: "products", path: "products") {
      name
      imageURL
      description
      price
      stock
      category
      sku
      id
    }
  }
`;

const GET_BANNERS = gql`
  query getBanners {
    banners @rest(type: "banners", path: "banners") {
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
    addToCart @rest(type: "addToCart", path: "addToChart") {
      data
    }
  }
`;

export {
  GET_CATEGORIES, GET_CART, GET_PRODUCTS, GET_BANNERS,
};
