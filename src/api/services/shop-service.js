import axios from '../axios';

const getAll = () => {
  return axios.get('/products');
};

const get = (id) => {
  return axios.get(`/products/${id}`);
};

const shopServices = {
  getAll,
  get,
};
export default shopServices;
