import SidebarLayout from '../../components/Sidebar/SidebarLayout';
import AdminAddProduct from '../Admin-add-product/AdminAddProduct';

function Admin() {
  return (
    <SidebarLayout>
      {/* <DashboardOverview /> */}
      {/* <AdminProducts /> */}
      {/* <AdminUsers /> */}
      <AdminAddProduct />
    </SidebarLayout>
  );
}

export default Admin;
