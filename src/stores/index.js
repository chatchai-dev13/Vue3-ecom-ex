import { createStore } from "vuex";

const store = createStore({
  state: {
    amount: 0,
  },
  mutations: {
    SET_AMOUNT : (state, value) => state.amount = value,
  },
  getters: {
    getCount: steate => steate.amount
  },
  actions: {
    addCart({ commit }, n) {
      commit("SET_AMOUNT", this.getters.getCount + n)
    },
  },
});

export default store;