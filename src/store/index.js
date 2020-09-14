import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "../unitilis/default-board";
Vue.use(Vuex);
const board = defaultBoard;

export default new Vuex.Store({
  state: {
    board
  },
  mutations: {},
  actions: {},
  modules: {}
});
