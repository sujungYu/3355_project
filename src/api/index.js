import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8000',
};
function signUp(payload) {
  return axios.post(`${config.baseUrl}/signup`, payload);
}

export { signUp };
