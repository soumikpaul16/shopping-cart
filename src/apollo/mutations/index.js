import { cartVar } from '../config';
import addToCart from './addToCart';
import clearCart from './clearCart';
import removeFromCart from './removeFromCart';

const mutations = {
  addToCart: addToCart(cartVar),
  removeFromCart: removeFromCart(cartVar),
  clearCart: clearCart(cartVar),
};

export default mutations;
