import axios from 'axios';
import authHeader from './services/auth-header';

const apiBaseURL = 'https://strapi-demo-app-hzjm.onrender.com/api';
const Authorization = authHeader();
// console.log(Authorization);

const config = {
  baseURL: apiBaseURL,
  // timeout : 3000,
  headers: {
    'Content-Type': 'application/json',
    ...Authorization,
  },
  withCredentials: false,
};

export default axios.create(config);
