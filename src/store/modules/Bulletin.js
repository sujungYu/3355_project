import axios from 'axios';

const Bulletin = {
  state: {
    bulletinList: [],
    studyInfo: '',
    attendStudy: [],
    attendName: '',
  },
  mutations: {
    renewList(state, payload) {
      state.bulletinList = payload;
    },
    nowStudy(state, payload) {
      state.studyInfo = payload;
    },
    attendList(state, payload) {
      state.attendStudy = payload;
    },
    nowAttend(state, payload) {
      state.attendName = payload;
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
    async attendUser({ commit }, payload) {
      await axios.get(`${'http://localhost:8001'}/users`).then(res => {
        const filterStudy = [];
        res.data.filter(e => {
          e.user.filter(d => {
            if (d.name == payload) {
              return filterStudy.push(e);
            }
          });
        });
        console.log(filterStudy);
        commit('attendList', filterStudy);
      });
    },
  },
  getters: {},
};

export default Bulletin;
