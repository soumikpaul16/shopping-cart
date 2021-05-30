const handleCart = (cartVar) => (isOpen) => {
  const currentCartData = cartVar();
  const newCartData = {
    ...currentCartData,
    isCartOpen: isOpen,
  };

  cartVar(newCartData);
};

export default handleCart;
