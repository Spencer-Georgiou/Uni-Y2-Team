import Cart from "../../components/order/Cart";
import { useState, useEffect } from "react";
import OrderMenu from "../../components/order/OrderMenu";
import OrderProgress from "../../components/order/OrderProgress";
import TableNumber from "../../components/order/TableNumber";

const Order = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tableNumber, setTableNumber] = useState(0);

  return (
    <div class="flex flex-wrap justify-end w-screen h-auto">
      <div class="w-2/3 bg-lemon h-auto">
        <OrderProgress tableNumber={tableNumber} />
        <OrderMenu />
        <TableNumber
          openModal={openModal}
          setOpenModal={setOpenModal}
          setTableNumber={setTableNumber}
        />
      </div>
      <Cart setOpenModal={setOpenModal} />
    </div>
  );
};

export default Order;
