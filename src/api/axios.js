import axios from 'axios';

const config = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // timeout : 3000,
  withCredentials: true,
};

export default axios.create(config);
