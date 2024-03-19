import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "./redux/cartSlice";
import { useDispatch } from "react-redux";

//display cart items
//@param item name which is also id, item description, item price, set initial quantity to 0
function CartItem({ name, description, price, quantity = 0 }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <p class="text-lg">
        <b>{name}</b>
      </p>
      <p>{description}</p>
      <span>
        Price: <b>￡{price} </b>
        <div className="float-right mx-2">
          <button
            onClick={() => dispatch(decrementQuantity(name))}
            type="button"
            className=" border text-gray-800 border-gray-800 bg-amber hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-1.5 py-1.5 text-center inline-flex items-center m-1 hover:text-dark hover:bg-amber"
          >
            <svg
              class="w-3 h-3 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          <b className="text-lg">{quantity}</b>
          <button
            onClick={() => dispatch(incrementQuantity(name))}
            type="button"
            className="border text-gray-800 border-gray-800 bg-amber hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-1.5 py-1.5 text-center inline-flex items-center m-1 hover:text-dark hover:bg-amber"
          >
            <svg
              class="w-3 h-3 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
          <button
            type="button"
            class="text-sm ml-1 underline hover:text-cherry"
            onClick={() => dispatch(removeItem(name))}
          >
            Remove
          </button>
        </div>
      </span>
    </div>
  );
}

export default CartItem;
