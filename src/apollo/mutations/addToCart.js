const addToCart = (cartVar) => (productId, stock) => {
  const cartData = cartVar();

  const newCartData = {
    count:
      cartData.products[productId] && cartData.products[productId].qty === stock
        ? cartData.count
        : cartData.count + 1,
    products: {
      ...cartData.products,
      ...{
        [productId]: {
          stock,
          qty: cartData.products[productId]
            ? cartData.products[productId].qty === stock
              ? stock
              : cartData.products[productId].qty + 1
            : 1,
        },
      },
    },
  };

  cartVar(newCartData);
};

export default addToCart;
