import axios from 'axios';

const mainConfig = {
  baseUrl: 'http://localhost:8000',
};
const subConfig = {
  baseUrl: 'http://localhost:8001',
};
function signUp(payload) {
  return axios.post(`${mainConfig.baseUrl}/signup`, payload);
}
function addBulletin(payload) {
  return axios.post(`${subConfig.baseUrl}/${payload.type}`, payload);
}

export { signUp, addBulletin };
