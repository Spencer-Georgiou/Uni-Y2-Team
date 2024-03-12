import OrderFilter from "../../components/order/OrderFilter";
import Cart from "../../components/order/Cart";
import { useState, useEffect } from "react";
import OrderMenu from "../../components/order/OrderMenu";
import OrderProgress from "../../components/order/OrderProgress";
import TableNumber from "../../components/order/TableNumber";

const Order = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [gluten, setGluten] = useState(true);
  const [dairy, setDairy] = useState(true);

  return (
    <div class="flex flex-wrap justify-end w-screen h-auto">
      <div class="w-2/3 bg-lemon h-auto">
        {showProgress && <OrderProgress />}
        <OrderFilter setGluten={setGluten} setDairy={setDairy} />
        <OrderMenu gluten={gluten} dairy={dairy} />
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
