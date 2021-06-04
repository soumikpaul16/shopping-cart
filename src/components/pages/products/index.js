import { useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { focusFirstInteractiveEl } from '../../../utils';
import mutations from '../../../apollo/mutations';
import { GET_CATEGORIES, GET_PRODUCTS } from '../../../apollo/queries';
import useMediaQuery from '../../../utils/useMediaQuery';
import { DropDown } from '../../atoms';
import { ProductCard, SidePanel } from '../../organisms';
import './Products.scss';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const match = useRouteMatch('/products/:categoryId');
  const history = useHistory();
  const location = useLocation();
  const ref = useRef(null);
  const notMobile = useMediaQuery('(min-width: 481px)'); // for ipad and laptops

  // apollo client
  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: productsData } = useQuery(GET_PRODUCTS);
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
    setFilteredProducts(productsData.products);
    // contains all products
    setSelectedCategory('');
  };

  // effects
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && categoriesData) {
      setCategories(
        categoriesData.categories
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order),
      );
    }
    return () => {
      isCancelled = true;
    };
  }, [categoriesData]);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && categories.length > 0 && productsData) {
      if (match) {
        const { categoryId } = match.params;
        const filteredProductArray = productsData.products.filter(
          (product) => product.category === categoryId,
        );
        // if someone sent wrong category id it will show all products
        if (filteredProductArray.length > 0) {
          setFilteredProducts(filteredProductArray);
          setSelectedCategory(categoryId);
          focusFirstInteractiveEl(ref);
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
  }, [location, categories, productsData]);

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
          items={[...categories, { id: '', name: 'All Products' }]}
          selectedValue={selectedCategory}
          handleChange={handleChange}
          onlyMobile
        />
      )}
      <div className="products__container" ref={ref}>
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
