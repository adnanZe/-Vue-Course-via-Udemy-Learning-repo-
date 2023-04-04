import { createStore } from 'vuex';
import auth from './auth/index';
import cart from './cart/index';
import products from './products/index';

const store = createStore({
  modules: {
    auth,
    cart,
    products,
  },
});

export default store;
