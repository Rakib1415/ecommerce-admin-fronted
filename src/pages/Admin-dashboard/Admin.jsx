import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import { retrieveProducts } from '../../stores/features/shopSlice';
import { retrieveAllUser } from '../../stores/features/userSlice';

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveAllUser());
    dispatch(retrieveProducts());
  }, [dispatch]);
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
}

export default Admin;
