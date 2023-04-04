import cartGetters from './getters';
import cartMutations from './mutations';
import cartActions from './actions';

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
