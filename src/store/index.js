import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/Login';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Login,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
