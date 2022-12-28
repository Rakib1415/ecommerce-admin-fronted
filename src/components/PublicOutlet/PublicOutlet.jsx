import { Navigate, Outlet } from 'react-router-dom';

function PublicOutlet() {
  const currentUser = undefined;
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PublicOutlet;
