import cartGetters from './getters';
import cartMutations from './mutations';
import cartActions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
