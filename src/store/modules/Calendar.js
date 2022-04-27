//Calendar.vue, TodoList.vue vuex
import axios from 'axios';

const Calendar = {
  state: {
    year: '',
    month: '',
    day: '',
    attend: [],
    checkUser: [],
  },
  mutations: {
    initAttend(state) {
      state.attend = [];
    },
    clickDate(state, payload) {
      state.year = payload.year;
      state.month = payload.month;
      state.day = payload.day;
    },
    addNewAtten(state, payload) {
      state.attend.push(payload);
    },
    clearAll(state) {
      state.attend = [];
    },
    studyUser(state, payload) {
      state.checkUser = payload;
    },
  },
  actions: {
    getAttend({ commit }, payload) {
      //해당방ID를 payload로 받음
      // eslint-disable-next-line prettier/prettier
      axios.get(`${'http://localhost:8001'}/userAttend?studyId=${payload}`)
        .then(res => {
          let i;
          for (i = 0; i < res.data.length; i++) {
            commit('addNewAttend', res.data[i]);
          }
        });
    },
  },
  getters: {
    showAttend: state => {
      return state.attend.filter(
        attend =>
          attend.createdAt == state.year + '-' + state.month + '-' + state.day,
      );
    },
  },
};
export default Calendar;
