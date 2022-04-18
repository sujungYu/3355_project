import axios from 'axios';

const Bulletin = {
  state: {
    bulletinList: [],
    studyInfo: '',
  },
  mutations: {
    renewList(state, payload) {
      state.bulletinList = payload;
    },
    nowStudy(state, payload) {
      state.studyInfo = payload;
    },
  },
  actions: {
    async setBulletin({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8001'}/${payload}`)
        .then(res => {
          console.log(res.data);
          commit('renewList', res.data);
        })
        .catch(err => {
          console.log(err);
        });

      //   commit('renewList', payloa)
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
  },
  getters: {},
};

export default Bulletin;
