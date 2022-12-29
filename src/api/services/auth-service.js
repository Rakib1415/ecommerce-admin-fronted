import axios from '../axios';

const register = async ({ username, email, phone, password }) => {
  const response = await axios.post(`/auth/local/register`, {
    username,
    email,
    phone_number: phone,
    password,
  });
  const { jwt } = response.data;
  if (jwt) {
    localStorage.setItem('currentUser', JSON.stringify(response.data));
  }
  return response.data;
};

const login = async ({ email, password }) => {
  const response = await axios.post(`/auth/local`, {
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
