import axios from 'axios';

const Login = {
  state: {
    loginUser: '',
  },
  mutations: {
    nowUserId(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
        await axios.get(`${'http://localhost:8000'}/signup?name=${payload}`)
        .then(res => {
          commit('nowUserId', res.data[0].id);
          console.log(res.data[0].id);
          localStorage.setItem(
            'user',
            JSON.stringify({
              userId: res.data[0].id,
              userName: res.data[0].name,
            }),
          );
        });
    },
  },
  getters: {},
};

export default Login;
