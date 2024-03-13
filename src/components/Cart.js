import { useSelector, useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  }

  return(
    <div className="cart-page">
      <h1>Our Bucket</h1>
      <button onClick={handleclearCart}>Clear Cart</button>
      <div>
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}
export default Cart;