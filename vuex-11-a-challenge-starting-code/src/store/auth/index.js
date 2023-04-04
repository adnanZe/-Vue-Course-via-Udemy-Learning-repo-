import authGetters from './getters';
import authMutations from './mutations';
import authActions from './actions';

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
