import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_BANNERS, GET_CATEGORIES } from '../../../apollo/queries';
import { Carousel } from '../../molecules';
import { CategorySection } from '../../organisms';
import './Home.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  const { data: bannersData } = useQuery(GET_BANNERS);
  const { data: categoriesData } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && bannersData && categoriesData) {
      setBanners(
        bannersData.banners
          .filter((banner) => banner.isActive)
          .sort((a, b) => a.order - b.order),
      );
      setCategories(
        categoriesData.categories
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order),
      );
    }
    return () => {
      isCancelled = true;
    };
  }, [bannersData, categoriesData]);

  return (
    <>
      {banners.length > 0 && <Carousel bannersInfo={banners} />}
      <section className="home__categories">
        {categories.length > 0
          && categories.map((category, index) => (
            <CategorySection
              key={category.id}
              reverseContent={!((index + 1) % 2)}
              imageUrl={category.imageUrl}
              name={category.name}
              description={category.description}
              buttonContent={category.key}
              redirectPath={`products/${category.id}`}
            />
          ))}
      </section>
    </>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
