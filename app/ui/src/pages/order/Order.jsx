import Cart from "../../components/order/Cart";
import { useState, useEffect } from "react";
import OrderMenu from "../../components/order/OrderMenu";
import OrderProgress from "../../components/order/OrderProgress";
import TableNumber from "../../components/order/TableNumber";
import Payment from "../../components/order/Payment";

const Order = () => {
  const [openModal, setOpenModal] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [openPay, setOpenPay] = useState(false);

  return (
    <div class="flex flex-wrap justify-end w-screen h-auto">
      <div class="w-2/3 bg-lemon h-auto">
        <OrderProgress setconfirm={setconfirm} confirm={confirm} />
        <OrderMenu />
        <TableNumber
          openModal={openModal}
          setOpenModal={setOpenModal}
          setconfirm={setconfirm}
        />
        <Payment
          openPay={openPay}
          setOpenPay={setOpenPay}
          setOpenModal={setOpenModal}
        />
      </div>
      <Cart setOpenPay={setOpenPay} />
    </div>
  );
};

export default Order;
