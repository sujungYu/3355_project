import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/Login';
import Bulletin from './modules/Bulletin';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Login,
    Bulletin,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
