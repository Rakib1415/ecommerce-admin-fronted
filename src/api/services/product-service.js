import axios from '../axios';

const createProduct = ({ title, imageUrl, description, price, stock }) => {
  const data = {
    data: {
      slug: `slug-${Math.floor(Math.random() * 100 + 1)}`,
      title,
      imageUrl,
      description,
      price,
      stock,
    },
  };
  return axios.post('/products', JSON.stringify(data));
};

const productServices = {
  createProduct,
};

export default productServices;
