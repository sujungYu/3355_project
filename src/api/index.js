import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8000',
};
function signUp(payload) {
  return axios.post(`${config.baseUrl}/signup`, payload);
}
function addBulletin(payload) {
  return axios.post(`${config.baseUrl}/bulletins`, payload);
}

export { signUp, addBulletin };
