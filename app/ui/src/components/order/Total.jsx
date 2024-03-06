import { useSelector } from "react-redux";

function Total() {
  //get the state of cart in reducer
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
  return <p>{getTotal.totalQuantity()}</p>;
}
export default Total;
