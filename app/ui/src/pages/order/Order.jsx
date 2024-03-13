import Cart from "../../components/order/Cart";
import { useState, useEffect } from "react";
import OrderMenu from "../../components/order/OrderMenu";
import OrderProgress from "../../components/order/OrderProgress";
import TableNumber from "../../components/order/TableNumber";

const Order = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <div class="flex flex-wrap justify-end w-screen h-auto">
      <div class="w-2/3 bg-lemon h-auto">
        {showProgress && <OrderProgress />}
        <OrderMenu />
        <TableNumber
          openModal={openModal}
          setOpenModal={setOpenModal}
          setShowProgress={setShowProgress}
        />
      </div>
      <Cart setOpenModal={setOpenModal} />
    </div>
  );
};

export default Order;
