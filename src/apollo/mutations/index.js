import { cartVar } from '../config';
import addToCart from './addToCart';
import clearCart from './clearCart';
import removeFromCart from './removeFromCart';
import handleCart from './handleCart';

const mutations = {
  addToCart: addToCart(cartVar),
  removeFromCart: removeFromCart(cartVar),
  clearCart: clearCart(cartVar),
  handleCart: handleCart(cartVar),
};

export default mutations;
