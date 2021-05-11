import React, { useState, useEffect } from 'react';
import { CategorySection } from '../../organisms';
import categoriesContent from '../../../../server/categories/index.get.json';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      setCategories(categoriesContent);
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
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
              redirectPath={category.key}
            />
          ))}
    </>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
