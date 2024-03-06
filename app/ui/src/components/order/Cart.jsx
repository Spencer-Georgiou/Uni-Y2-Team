import { Fragment, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = () => {
  //useSelector hook to get the cart state from our store
  const cart = useSelector((state) => state.cart);
  //@return the total price and quantity
  const getTotal = () => {
    //initial state is 0
    let totalQuantity = 0;
    let totalPrice = 0;
    //iterate each item in the cart state to add quantities and prices
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return { totalPrice, totalQuantity };
  };

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
        {/* <p>{getTotalQuantity() || 0}</p> */}
        <p>
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
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
