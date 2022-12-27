import { Navigate, Outlet } from 'react-router-dom';

function PublicOutlet() {
  const currentUser = {
    name: 'rakib hasan',
  };
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PublicOutlet;
