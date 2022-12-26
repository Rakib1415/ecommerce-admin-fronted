import ProductItem from '../ProductItem/ProductItem';

const products = [
  {
    id: 1,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
  {
    id: 2,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
  {
    id: 3,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
  {
    id: 4,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
  {
    id: 5,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
  {
    id: 6,
    title: 'Mens casual shirt',
    imgUrl:
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
    price: 1500,
    colorNumber: 6,
  },
];

function ProductContainer() {
  return (
    <div className="container min-w-screen px-4 py-8">
      <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
