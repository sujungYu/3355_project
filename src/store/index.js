import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/Login';
import Bulletin from './modules/Bulletin';
import Calendar from './modules/Calendar';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Login,
    Bulletin,
    Calendar,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
