import OrderFilter from "../../components/order/OrderFilter";

import SideBar from "../../components/order/SideBar";
import { useState, useEffect } from "react";
import OrderTab from "../../components/order/OrderTable";

const Order = () => {
  const [order, setOrder] = useState([
    {
      name: "Tacos with Crispy tacos filled with cheese",
      price: "￡5.00",
      amount: 1,
      id: 1,
    },
  ]);

  function handleOrder(e) {}

  return (
    <div class="flex flex-wrap justify-end w-screen h-screen">
      <div class="w-2/3 bg-lemon h-screen ">
        {/* <OrderProgress /> */}

        <OrderFilter />

        <OrderTab />
      </div>
      <SideBar order={order} />
    </div>
  );
};

export default Order;
