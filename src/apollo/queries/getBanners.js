import { gql } from '@apollo/client';

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

export default GET_BANNERS;
