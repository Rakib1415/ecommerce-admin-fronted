const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user && user.jwt) {
    return { Authorization: `Bearer ${user.jwt}` };
  }
  return {};
};

export default authHeader;
