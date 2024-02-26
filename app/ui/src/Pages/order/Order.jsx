import TableNumber from "../../components/order/TableNumber";
import CallWaiter from "../../components/order/CallWaiter";
import OrderFilter from "../../components/order/OrderFilter";
import OrderProgress from "../../components/order/OrderProgress";
import SideBar from "../../components/order/SideBar";

const Order = () => {
  return (
    <div>
      <div class="w-2/3 bg-lemon float-right">
        <div style={{ height: "100px" }}></div>
        <OrderProgress />
        <OrderFilter />
        <div class="h-700 bg-cherry">try</div>
      </div>
      <div class="float-left w-1/3 bg-amber h-screen fixed z-10 top-0 start-0">
        <SideBar />
      </div>
    </div>
  );
};

export default Order;
