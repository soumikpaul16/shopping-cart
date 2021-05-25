import { useQuery } from '@apollo/react-hooks';
import React, { useState, useEffect } from 'react';
import './Products.scss';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import useMediaQuery from '../../../utils/useMediaQuery';
import { DropDown, RouteLink } from '../../atoms';
import { GET_PRODUCTS, GET_CATEGORIES } from '../../../apollo/queries';
import { ProductCard } from '../../organisms';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const match = useRouteMatch('/products/:categoryId');
  const history = useHistory();
  const location = useLocation();
  const notMobile = useMediaQuery('(min-width: 481px)'); // for ipad and laptops

  const categoriesData = useQuery(GET_CATEGORIES);
  const productsData = useQuery(GET_PRODUCTS);

  const handleChange = (e) => {
    const { value } = e.target;
    history.push(value ? `/products/${value}` : '/products');
  };
  const viewAllProducts = () => {
    setFilteredProducts(allProducts);
    setSelectedCategory('');
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && productsData?.data && categoriesData?.data) {
      setAllProducts(productsData.data.products);
      setCategories(
        categoriesData.data.categories
          .sort((a, b) => a.order - b.order)
          .filter((category) => category.enabled),
      );
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

  return (
    <div className="products">
      {notMobile ? (
        <div className="products__category-links">
          <div className="products__category-links--fixed">
            {categories.map((category) => (
              <RouteLink
                key={category.id}
                className="products__category-links__item"
                path={`products/${category.id}`}
              >
                {category.name}
              </RouteLink>
            ))}
          </div>
        </div>
      ) : (
        <DropDown
          options={[...categories, { id: '', name: 'All Products' }]}
          selectedValue={selectedCategory}
          handleChange={handleChange}
          onlyMobile
        />
      )}
      <div className="products__container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} data={product} />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
