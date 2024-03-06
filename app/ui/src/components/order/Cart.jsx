import { Fragment, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";

const Cart = () => {
  //useSelector hook to get the cart state from our store
  const cart = useSelector((state) => state.cart);

  return (
    <div class="w-1/3 bg-amber h-screen">
      <div class="mt-20 bg-lemon w-10/12 h-[620px] ml-8 rounded-3xl p-6 overflow-x-auto">
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
        class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2 text-cente mx-36 mt-5 hover:bg-lemon hover:text-amber"
      >
        <b>Check Out</b>
      </button>
    </div>
  );
};

export default Cart;
