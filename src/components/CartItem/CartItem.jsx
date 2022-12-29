/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import {
  removeItemFromCart
} from '../../stores/features/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const {
    quantity,
    attributes: { title, imageUrl, price },
  } = item;

  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={imageUrl} className="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>

      <td>
        <p className="mb-2 md:ml-4">{title}</p>
        <div>
          <button
            onClick={() => dispatch(removeItemFromCart(item))}
            type="button"
            className="text-gray-700 md:ml-4"
          >
            <small>(Remove item)</small>
          </button>
        </div>
      </td>

      <td className="text-center mt-6">
        <p>{quantity}</p>
      </td>

      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">{price}</span>
      </td>
    </tr>
  );
}

export default CartItem;
