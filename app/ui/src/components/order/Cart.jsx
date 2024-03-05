import { Fragment, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const dispatch = useDispatch();

  return (
    <div class="w-1/3 bg-amber h-screen">
      <div class="mt-20 bg-lemon w-10/12 h-[600px] ml-8 rounded-3xl p-6">
        {cart?.map((item) => (
          <CartItem
            name={item.name}
            decription={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <p>{getTotalQuantity() || 0}</p>
        {Total}
      </div>
      <button
        type="button"
        class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2.5 text-cente mx-36 mt-5 hover:bg-lemon hover:text-amber"
      >
        <b>Check Out</b>
      </button>
    </div>
  );
};

export default Cart;
