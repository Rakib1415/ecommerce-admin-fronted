/* eslint-disable jsx-a11y/control-has-associated-label */

import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import StripeButton from '../../components/StripeButton/StripeButton';
import { cartSubTotal } from '../../utils/cart';

function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const subTotal = cartSubTotal(items);
  const total = subTotal * (1 / 10) + subTotal;
  return (
    <div className="container my-6">
      <div className="w-full p-8 bg-white shadow-lg">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 justify-between">
          <div className="">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell" />
                  <th className="text-left">ADDED ITEMS</th>
                  <th className="text-center pl-5 lg:pl-0">
                    <span className="lg:hidden text-center" title="Quantity">
                      Qty
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          <OrderDetail />
        </div>
        <div className="lg:w-1/3 ml-auto">
          {/* <CustomButton type="button">
            <span className="ml-2 mt-5px">Pay and Place order</span>
          </CustomButton> */}
          <StripeButton price={total} />
        </div>
        <div className="text-center text-red-400">
          please use the following test credit card for payment
          <br />
          4242 4242 4242 4242 - exp: 01-2023 - CVV: 123
        </div>
      </div>
    </div>
  );
}

export default Checkout;
