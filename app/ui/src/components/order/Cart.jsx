import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";

const Cart = ({ setOpenModal }) => {
  //useSelector hook to get the cart state from our store
  const cart = useSelector((state) => state.cart);
  const length = cart.length;
  return (
    <div class="w-1/3 bg-amber h-auto">
      <div class="mt-[250px] bg-lemon w-10/12 h-[620px] ml-8 rounded-3xl p-6 overflow-x-auto">
        {cart?.map((item) => (
          <CartItem
            name={item.name}
            decription={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <OrderTotal />
      </div>
      <button
        type="button"
        onClick={() => {
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
