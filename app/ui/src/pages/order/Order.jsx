import TableNumber from "../../components/order/TableNumber";
import CallWaiter from "../../components/order/CallWaiter";
import OrderFilter from "../../components/order/OrderFilter";
import OrderProgress from "../../components/order/OrderProgress";
import SideBar from "../../components/order/SideBar";
import Starters from "../../components/order/Starters";
import { useState, useEffect } from "react";
import OrderMain from "../../components/order/OrderMain";
import OrderDessert from "../../components/order/OrderDessert";
import OrderNonAlcoholic from "../../components/order/OrderNonAlcoholic";
import OrderAlocholic from "../../components/order/OrderAlcoholic";

const Order = () => {
  const [menu, setMenu] = useState([]);
  const [starter, setStarter] = useState(menu);

  function getStarter() {
    let filter = menu.filter((m) => m.menugroup.category === "Starter");
    setStarter(filter);
    console.log(filter);
  }

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setMenu(json));
    getStarter();
  }, []);

  const [order, setOrder] = useState([
    {
      name: "Tacos with Crispy tacos filled with cheese",
      price: "￡5.00",
      amount: 1,
      id: 1,
    },
  ]);

  function handleOrder(e) {
    let { name, value } = e.target;
    console.log(name);
  }

  return (
    <div>
      <div class="w-2/3 bg-lemon float-right">
        <div style={{ height: "100px" }}></div>
        <OrderProgress />
        <button
          type="button"
          class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2.5 text-cente mx-36 mt-5"
          onChange={getStarter}
        >
          <b>Start Order</b>
        </button>
        <OrderFilter />
        <div class="bg-lemon">
          <Starters starter={starter} handleOrder={handleOrder} />
          <OrderMain />
          <OrderDessert />
          <OrderNonAlcoholic />
          <OrderAlocholic />
          {/* <ul>
            {menu.map((m) => (
              <p>{m.name}</p>
            ))}
          </ul> */}
        </div>
      </div>
      <div class="float-left w-1/3 bg-amber h-screen fixed z-10 top-0 start-0">
        <SideBar order={order} />
      </div>
    </div>
  );
};

export default Order;
