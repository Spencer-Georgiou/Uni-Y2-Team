import TableNumber from "../../components/order/TableNumber";
import CallWaiter from "../../components/order/CallWaiter";
import OrderFilter from "../../components/order/OrderFilter";
import OrderProgress from "../../components/order/OrderProgress";
import SideBar from "../../components/order/SideBar";
import Starters from "../../components/order/Starters";
import { useState, useEffect } from "react";

const Order = () => {
  const [menu, setMenu] = useState();
  const [starter, setStarter] = useState();

  function getData() {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setMenu(json));
    console.log(menu);
  }

  function getStarter() {
    // const starter = Objec
    let filter = menu.filter((m) => m.menugroup.category === "starter");
    console.log(filter);
  }

  useEffect(() => {
    getData();
  }, []);

  const [order, setOrder] = useState([
    {
      name: "hello",
      price: "3",
      amount: 1,
      id: 1,
    },
  ]);

  function handleOrder(e) {
    let { name, value } = e.target;
    // console.log(name);
  }

  return (
    <div>
      <div class="w-2/3 bg-lemon float-right">
        <div style={{ height: "100px" }}></div>
        <OrderProgress />
        <OrderFilter />
        <div class="bg-lemon">
          <Starters starter={menu} handleOrder={handleOrder} />
        </div>
      </div>
      <div class="float-left w-1/3 bg-amber h-screen fixed z-10 top-0 start-0">
        <SideBar order={order} />
      </div>
    </div>
  );
};

export default Order;
