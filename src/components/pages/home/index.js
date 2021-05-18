import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Carousel } from '../../molecules';
import { CategorySection } from '../../organisms';
import { GET_BANNERS, GET_CATEGORIES } from '../../../services';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const bannersData = useQuery(GET_BANNERS);
  const categoriesData = useQuery(GET_CATEGORIES);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && bannersData?.data && categoriesData?.data) {
      setBanners(bannersData.data.get);
      setCategories(categoriesData.data.get);
    }
    return () => {
      isCancelled = true;
    };
  }, [bannersData, categoriesData]);

  return (
    <>
      {banners.length > 0 && <Carousel bannersInfo={banners} />}
      {categories.length > 0
        && categories
          .filter((e) => e.enabled)
          .sort((a, b) => a.order - b.order)
          .map((category, index) => (
            <CategorySection
              key={category.id}
              reverseContent={!((index + 1) % 2)}
              imageUrl={category.imageUrl}
              name={category.name}
              description={category.description}
              buttonContent={category.key}
              redirectPath={`products/${category.key}`}
            />
          ))}
    </>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
