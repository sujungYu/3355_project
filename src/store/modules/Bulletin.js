import axios from 'axios';

const Bulletin = {
  state: {
    bulletinList: [],
    studyInfo: '',
    myStudy: [],
    attendName: '',
    attendId: '',
  },
  mutations: {
    renewList(state, payload) {
      state.bulletinList = payload;
    },
    nowStudy(state, payload) {
      state.studyInfo = payload;
    },
    myStudyList(state, payload) {
      state.myStudy = payload;
    },
    nowAttend(state, payload) {
      state.attendName = payload;
    },
    attendId(state, payload) {
      state.attendId = payload;
    },
  },
  actions: {
    async setBulletin({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8001'}/${payload}`)
        .then(res => {
          commit('renewList', res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setStudy({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8001'}/${payload.type}?id=${payload.id}`)
        .then(res => {
          commit('nowStudy', res.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setAttend({ commit }, payload) {
      await axios.get(`${'http://localhost:8001'}/users`).then(res => {
        const filterInfo = [];
        res.data.filter(e => {
          e.user.filter(d => {
            if (d.name == payload) {
              return filterInfo.push(e);
            }
          });
        });
        // console.log(filterInfo);
        commit('myStudyList', filterInfo);
      });
    },
  },
  getters: {},
};

export default Bulletin;
