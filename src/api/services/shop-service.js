import axios from '../axios';

const getAll = () => {
  return axios.get('/products?pagination[page]=1&pagination[pageSize]=50');
};

const get = (id) => {
  return axios.get(`/products/${id}`);
};

const shopServices = {
  getAll,
  get,
};
export default shopServices;
