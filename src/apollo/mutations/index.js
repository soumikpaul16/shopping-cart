import { cartVar } from '../config';
import addToCart from './addToCart';

const mutations = {
  addToCart: addToCart(cartVar),
};

export default mutations;
