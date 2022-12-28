import axios from '../axios';

const register = (username, email, phoneNumber, password) => {
  return axios.post('/auth/local/register', {
    email,
    phone_number: phoneNumber,
    password,
    username,
  });
};

const login = async (email, password) => {
  const response = await axios.post('/auth/local', {
    identifier: email,
    password,
  });
  const { jwt } = response.data;
  if (jwt) {
    localStorage.setItem('currentUser', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('currentUser');
};

const authService = {
  login,
  logout,
  register,
};

export default authService;
