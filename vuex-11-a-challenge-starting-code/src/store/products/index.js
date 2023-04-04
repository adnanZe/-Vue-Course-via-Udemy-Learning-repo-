import productsGetters from './getters';
import productsMutations from './mutations';
import productsActions from './actions';

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: productsMutations,
  actions: productsActions,
  getters: productsGetters,
};
