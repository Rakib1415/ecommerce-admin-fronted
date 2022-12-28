import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicOutlet() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PublicOutlet;
