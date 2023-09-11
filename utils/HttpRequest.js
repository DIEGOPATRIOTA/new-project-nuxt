import axios from 'axios';
const msg = require("./message.json");
//import router from '../router';
//import store from '@/_store';

const URL_BASE = process.env.VUE_APP_URL || '/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

let getAuthorizationToken = () => JSON.parse(localStorage.getItem('user')).token;

export default {
  //http verbs customized
  setAuthorizationToken: token => axios.defaults.headers.common['Authorization'] = token,
  getDownload: path => axios.get(URL_BASE + path, {responseType: 'blob', headers: { Authorization: getAuthorizationToken() }}),
  postDownload: (path,body) => axios.post(URL_BASE + path, body, {responseType: 'blob', headers: { Authorization: getAuthorizationToken() }}),
  getAuthBasic: (path, authBasic) => axios.get(URL_BASE + path, { headers: { Authorization: authBasic } }),
  getVersionApi: () => axios.get(URL_BASE),
  //http verbs default
  get: path => axios.get(URL_BASE + path, { headers: { Authorization: getAuthorizationToken() } }),
  post: (path,body) => axios.post(URL_BASE + path, body, { headers: { Authorization: getAuthorizationToken() } }),
  put: (path,body) => axios.put(URL_BASE + path, body, { headers: { Authorization: getAuthorizationToken() } }),
  delete: path => axios.delete(URL_BASE + path, { headers: { Authorization: getAuthorizationToken() } })
};


axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  const httpStatusCode = error.response ? error.response.status : error.message;
  
  error.message = msg.error[httpStatusCode] ? msg.error[httpStatusCode] : httpStatusCode;

  if (httpStatusCode === 401) {
    error.message = msg.error[httpStatusCode][error.response.data.name];
    localStorage.removeItem('user');
    //store.state.account.status.loggedIn = false;
    //router.push('/login');
  }

  return Promise.reject(error);
});