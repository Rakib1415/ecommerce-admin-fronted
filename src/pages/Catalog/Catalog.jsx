import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import Spinner from '../../components/Spinner/Spinner';
import { retrieveCatalogItems } from '../../stores/features/catalogSlice';

function Catalog() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items, isLoading } = useSelector((state) => state.catalog);
  //   console.log(items);
  useEffect(() => {
    dispatch(retrieveCatalogItems(id));
  }, [dispatch, id]);
  return isLoading ? (
    <Spinner />
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

export default Catalog;
