const clearCart = (cartVar) => () => {
  const newCartData = {
    count: 0,
    totalCost: 0,
    products: {},
    isCartOpen: false,
  };

  cartVar(newCartData);
};

export default clearCart;
