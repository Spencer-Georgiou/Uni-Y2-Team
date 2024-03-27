import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";

// This class is the cart component.
//Displays cart area and checkout button.
const Cart = ({ setOpenModal }) => {
  //useSelector hook to get the cart state from our store
  const cart = useSelector((state) => state.cart);
  // the length of the cart
  const length = cart.length;
  return (
    <div class="w-1/3 bg-amber h-auto">
      <div class="mt-[250px] bg-lemon w-10/12 h-[620px] ml-8 rounded-3xl p-6 overflow-x-auto">
        {/* display cart items if they are exist */}
        {cart?.map((item) => (
          <CartItem
            name={item.name}
            decription={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        {/* display the total amounts and prices of cart items */}
        <OrderTotal />
      </div>
      {/* the button to checkout */}
      <button
        type="button"
        onClick={() => {
          // if the cart is not empty, allows user to checkout. If not, display warning alert.
          if (length > 0) {
            setOpenModal(true);
          } else {
            alert("Cannot checkout with no order!!!");
          }
        }}
        class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2 text-cente mx-36 mt-5 mb-8 hover:bg-lemon hover:text-amber"
      >
        <b>Check Out</b>
      </button>
    </div>
  );
};

export default Cart;
