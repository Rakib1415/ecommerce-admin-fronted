import { Navigate, Outlet } from 'react-router-dom';

function PrivateOutlet() {
  const currentUser = {
    name: 'rakib hasan',
  };
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateOutlet;
