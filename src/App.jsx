import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import PublicOutlet from './components/PublicOutlet/PublicOutlet';
import AdminAddProduct from './pages/Admin-add-product/AdminAddProduct';
import Admin from './pages/Admin-dashboard/Admin';
import AdminProducts from './pages/Admin-products/AdminProducts';
import AdminUsers from './pages/Admin-users/AdminUsers';
import Catalog from './pages/Catalog/Catalog';
import Checkout from './pages/Checkout/Checkout';
import DashboardOverview from './pages/Dashboard-overview/DashboardOverview';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PublicOutlet />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Catalog />} />
        <Route path="/shop/product/:id" element={<ProductDetail />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin/*" element={<Admin />}>
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="product" element={<AdminProducts />} />
            <Route path="add-product" element={<AdminAddProduct />} />
            <Route path="user" element={<AdminUsers />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
