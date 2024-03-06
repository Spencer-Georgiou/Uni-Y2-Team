import OrderFilter from "../../components/order/OrderFilter";

import Cart from "../../components/order/Cart";
import { useState, useEffect } from "react";
import OrderMenu from "../../components/order/OrderMenu";

const Order = () => {
  return (
    <div class="flex flex-wrap justify-end w-screen h-screen">
      <div class="w-2/3 bg-lemon h-screen ">
        {/* <OrderProgress /> */}
        <OrderFilter />
        <OrderMenu />
      </div>
      <Cart />
    </div>
  );
};

export default Order;
