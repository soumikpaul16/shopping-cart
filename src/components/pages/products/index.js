import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import mutations from '../../../apollo/mutations';
import { GET_CATEGORIES, GET_PRODUCTS } from '../../../apollo/queries';
import useMediaQuery from '../../../utils/useMediaQuery';
import { DropDown } from '../../atoms';
import { ProductCard, SidePanel } from '../../organisms';
import './Products.scss';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const match = useRouteMatch('/products/:categoryId');
  const history = useHistory();
  const location = useLocation();
  const notMobile = useMediaQuery('(min-width: 481px)'); // for ipad and laptops

  // apollo client
  const categoriesData = useQuery(GET_CATEGORIES);
  const productsData = useQuery(GET_PRODUCTS);
  const { addToCart } = mutations;

  // functions
  const handleChange = (e) => {
    const { value } = e.target;
    history.push(value ? `/products/${value}` : '/products');
  };

  const handleBuyNow = (product) => {
    addToCart(product);
  };

  const viewAllProducts = () => {
    setFilteredProducts(allProducts);
    setSelectedCategory('');
  };

  // effects
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && productsData?.data && categoriesData?.data) {
      setAllProducts(productsData.data.products);
      setCategories(
        categoriesData.data.categories
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order),
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
        <SidePanel
          links={categories.map((category) => ({
            ...category,
            ...{ path: `products/${category.id}` },
          }))}
        />
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
          <ProductCard
            key={product.sku}
            data={product}
            handleClick={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
