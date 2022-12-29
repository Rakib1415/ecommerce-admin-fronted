import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';

function ProductContainer() {
  const { items, errorMessage } = useSelector((state) => state.shop);
  return errorMessage ? (
    <h2>{errorMessage}</h2>
  ) : (
    <div className="container min-w-screen px-4 py-8">
      <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
