import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export default Cart = () => {
  // Subcribe to the right portion of the store as it will boost the performance.
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Please add items to your cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
