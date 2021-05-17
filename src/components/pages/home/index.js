import React, { useEffect, useState } from 'react';
import bannersContent from '../../../../server/banners/index.get.json';
import categoriesContent from '../../../../server/categories/index.get.json';
import { Carousel } from '../../molecules';
import { CategorySection } from '../../organisms';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      setBanners(bannersContent);
      setCategories(categoriesContent);
    }
    return () => {
      isCancelled = true;
    };
  }, []);

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
