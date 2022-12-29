import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';

function AdminProducts() {
  const { isLoading, items } = useSelector((state) => state.shop);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Table
        tHeadFirst="Product Name"
        tHeadSecond="price"
        tHeadThird="stock"
        tHeadFourth="createdAt"
        items={items}
      />
    </div>
  );
}

export default AdminProducts;
