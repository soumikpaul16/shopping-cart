import { useQuery } from '@apollo/react-hooks';
import React, { useState, useEffect } from 'react';
import './Products.scss';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { GET_PRODUCTS, GET_CATEGORIES } from '../../../apollo/queries';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const match = useRouteMatch('/products/:categoryId');
  const location = useLocation();

  const categoriesData = useQuery(GET_CATEGORIES);
  const productsData = useQuery(GET_PRODUCTS);

  const viewAllProducts = () => {
    setSelectedCategory(null);
    setFilteredProducts(allProducts);
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && productsData?.data && categoriesData?.data) {
      setAllProducts(productsData.data.products);
      setCategories(categoriesData.data.categories);
    }
    return () => {
      isCancelled = true;
    };
  }, [productsData, categoriesData]);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && categories.length > 0) {
      if (match) {
        const { categoryId } = match.params;
        const filteredProductArray = allProducts.filter(
          (product) => product.category === categoryId,
        );
        // if someone sent wrong category id it will show all products
        if (filteredProductArray.length > 0) {
          setFilteredProducts(filteredProductArray);
          setSelectedCategory(categoryId);
        } else {
          viewAllProducts();
        }
      } else {
        viewAllProducts();
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [location, categories]);

  return <></>;
};

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
