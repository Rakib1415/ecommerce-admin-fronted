import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../stores/features/cartSlice';

function StripeButton({ price }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_nrblwZRKHQgcCDtJjkfyaZg000It4c3lxl';

  const onToken = (token) => {
    console.log(token);
    alert(`Your Payment Successfully! your order token ${token.card.id}`);
    dispatch(clearCart());
    navigate('/shop');
  };

  return price > 0 ? (
    <StripeCheckout
      label="Pay and Place order"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay and Place order"
      token={onToken}
      stripeKey={publishableKey}
    />
  ) : (
    <h2>Please Continue Shopping</h2>
  );
}

export default StripeButton;
