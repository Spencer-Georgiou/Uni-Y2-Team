import OrderFilter from "../../components/order/OrderFilter";

import SideBar from "../../components/order/SideBar";
import { useState, useEffect } from "react";
import OrderTab from "../../components/order/OrderTable";

const Order = () => {
  const [order, setOrder] = useState([]);

  return (
    <div class="flex flex-wrap justify-end w-screen h-screen">
      <div class="w-2/3 bg-lemon h-screen ">
        {/* <OrderProgress /> */}

        <OrderFilter />

        <OrderTab setOrder={(order, setOrder)} />
      </div>
      <SideBar order={order} />
    </div>
  );
};

export default Order;
