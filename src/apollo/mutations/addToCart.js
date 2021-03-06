const addToCart = (cartVar) => (product) => {
  const {
    count, totalCost, products, isCartOpen,
  } = cartVar();
  const { price, stock, id } = product;
  const productInCart = products[id];
  const productNotAvailable = productInCart && productInCart.qty === stock;

  const newCartData = {
    count: productNotAvailable ? count : count + 1,
    totalCost: productNotAvailable ? totalCost : totalCost + price,
    isCartOpen,
    products: {
      ...products,
      ...{
        [id]: {
          ...product,
          stock,
          qty: productInCart
            ? productNotAvailable
              ? productInCart.qty
              : productInCart.qty + 1
            : 1,
          totalPrice: productInCart
            ? productNotAvailable
              ? productInCart.totalPrice
              : productInCart.totalPrice + price
            : price,
        },
      },
    },
  };

  cartVar(newCartData);
};

export default addToCart;
