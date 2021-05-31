import { gql } from '@apollo/client';

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

export default GET_CATEGORIES;
