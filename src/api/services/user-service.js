import axios from '../axios';

const getAllUser = () => {
  return axios.get('/users');
};

const getUsersCount = () => {
  return axios.get('/users/count');
};

const userServices = {
  getAllUser,
  getUsersCount,
};
export default userServices;
