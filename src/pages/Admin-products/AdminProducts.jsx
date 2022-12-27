import Table from '../../components/Table/Table';

function AdminProducts() {
  return (
    <div>
      <Table
        tHeadFirst="Product Name"
        tHeadSecond="Color"
        tHeadThird="Catagory"
        tHeadFourth="price"
      />
    </div>
  );
}

export default AdminProducts;
