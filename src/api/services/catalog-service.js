import axios from '../axios';

const catalogs = {
  men: 1,
  women: 2,
  kids: 3,
};

const getCatalogitems = (catalogId) => {
  return axios.get(`/catalogs/${catalogs[catalogId]}?populate=*`);
};

const catalogServices = {
  getCatalogitems,
};
export default catalogServices;
