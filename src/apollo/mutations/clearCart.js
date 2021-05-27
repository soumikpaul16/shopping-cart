const clearCart = (cartVar) => () => {
  const newCartData = {
    count: 0,
    totalCost: 0,
    products: {},
  };

  cartVar(newCartData);
};

export default clearCart;
