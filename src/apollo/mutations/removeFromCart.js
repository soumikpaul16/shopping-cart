const removeFromCart = (cartVar) => (id) => {
  const {
    count, totalCost, products, isCartOpen,
  } = cartVar();
  const { qty, price, totalPrice } = products[id];

  const newCartData = {
    count: qty ? count - 1 : count,
    totalCost: qty ? totalCost - price : totalCost,
    isCartOpen,
    products: {
      ...products,
      ...{
        [id]: {
          ...products[id],
          qty: qty ? qty - 1 : 0,
          totalPrice: totalPrice ? totalPrice - price : 0,
        },
      },
    },
  };

  if (qty === 1) {
    delete newCartData.products[id];
  }

  cartVar(newCartData);
};

export default removeFromCart;
