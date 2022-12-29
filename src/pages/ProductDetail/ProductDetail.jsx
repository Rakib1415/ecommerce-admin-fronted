import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';
import { addItem } from '../../stores/features/cartSlice';
import { findProductById } from '../../stores/features/productSlice';

function ProductDetail() {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector((state) => state.product);

  const { id } = useParams();
  useEffect(() => {
    dispatch(findProductById(id));
  }, [dispatch, id]);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="relative container min-w-screen px-4 py-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src={item?.attributes?.imageUrl}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
        <div className="sticky top-0">
          <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
            catagory name
          </strong>

          <div className="mt-8 flex justify-between">
            <div className="max-w-[35ch]">
              <h1 className="text-2xl font-bold font-roboto">
                {item?.attributes?.title}
              </h1>

              <p className="mt-0.5 text-sm text-slate-400">SKU-2638</p>
            </div>

            <p className="text-lg font-bold text-green-600">
              BDT {item?.attributes?.price}
            </p>
          </div>

          <details className="group relative mt-4">
            <summary className="block">
              <div>
                <div className="prose max-w-none group-open:hidden">
                  <h4>Product details:</h4>
                  <p>{item?.attributes?.description}</p>
                </div>
              </div>
            </summary>
          </details>

          <div className="mt-8">
            {/* quantity select  */}
            <div className="mt-4">
              <legend className="mb-1 text-sm font-medium">Quantity</legend>

              <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                  onClick={() => {
                    if (count > 1) {
                      setCount((prevCount) => prevCount - 1);
                    }
                  }}
                  type="button"
                  className="inline-block px-2 text-gray-700 hover:bg-gray-50 focus:relative"
                  title="Edit Product"
                >
                  -
                </button>

                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={count}
                  className="w-12 rounded border-gray-100 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                  onClick={() => setCount((prevCount) => prevCount + 1)}
                  type="button"
                  className="inline-block px-2 text-gray-700 hover:bg-gray-50 focus:relative"
                  title="Delete Product"
                >
                  +
                </button>
              </span>
            </div>

            {/* Add to bag btn */}
            <div className="mt-8 flex">
              <CustomButton
                onClick={() =>
                  dispatch(addItem({ quantity: count, cartItemToAdd: item }))
                }
                type="button"
              >
                <span className="text-sm font-medium"> Add to Bag </span>

                <svg
                  className="ml-1.5 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </CustomButton>
              <CustomButton inverted type="button">
                <Link to="/shop" className="text-sm font-medium">
                  {' '}
                  Go Back{' '}
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
