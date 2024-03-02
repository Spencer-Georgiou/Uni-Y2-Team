import OrderFilter from "../../components/order/OrderFilter";

import SideBar from "../../components/order/SideBar";
import { useState, useEffect } from "react";
import OrderTab from "../../components/order/OrderTable";

const Order = () => {
  const [order, setOrder] = useState([]);

  function handleOrder(food) {
    setOrder([
      ...order,
      {
        name: food.name,
        description: food.description,
        price: food.price,
        amount: 1,
      },
    ]);
    console.log(order);
  }

  return (
    <div class="flex flex-wrap justify-end w-screen h-screen">
      <div class="w-2/3 bg-lemon h-screen ">
        {/* <OrderProgress /> */}

        <OrderFilter />

        <OrderTab handleOrder={handleOrder} />
      </div>
      <SideBar order={order} />
    </div>
  );
};

export default Order;
