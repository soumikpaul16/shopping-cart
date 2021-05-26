import { gql } from '@apollo/client';

const GET_CART = gql`
  query getCart {
    cart @client
  }
`;

export default GET_CART;
