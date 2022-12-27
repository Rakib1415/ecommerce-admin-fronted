import { Outlet } from 'react-router-dom';
import SidebarLayout from '../../components/Sidebar/SidebarLayout';

function Admin() {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
}

export default Admin;
