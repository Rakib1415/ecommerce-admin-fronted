const authHeader = () => {
  const user = localStorage.getItem('currentUser');

  if (user && user.jwt) {
    return { Authorization: `Bearer ${user.jwt}` };
  }
  return {};
};

export default authHeader;
