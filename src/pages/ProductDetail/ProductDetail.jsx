import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';

function ProductDetail() {
  return (
    <div className="relative container min-w-screen px-4 py-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
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
                Mens Casual Shirt
              </h1>

              <p className="mt-0.5 text-sm text-slate-400">SKU-2638</p>
            </div>

            <p className="text-lg font-bold text-green-600">BDT 1500</p>
          </div>

          <details className="group relative mt-4">
            <summary className="block">
              <div>
                <div className="prose max-w-none group-open:hidden">
                  <h4>Product details:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>
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
                  value="1"
                  className="w-12 rounded border-gray-100 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
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
              <CustomButton type="button">
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
