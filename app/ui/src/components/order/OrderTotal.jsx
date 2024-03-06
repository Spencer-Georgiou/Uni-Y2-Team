import { useSelector } from "react-redux";

const OrderTotal = () => {
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
    <div>
      <p className="mt-5 mb-2 overline decoration-2 text-lg">
        Total ( {getTotal().totalQuantity} items) :{" "}
        <b>${getTotal().totalPrice}</b>
      </p>
    </div>
  );
};

export default OrderTotal;
