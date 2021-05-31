import { gql } from '@apollo/client';

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

export default GET_PRODUCTS;
