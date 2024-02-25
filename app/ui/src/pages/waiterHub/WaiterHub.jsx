import NewOrderButton from "../../components/waiterHub/NewOrderButton";
import ModifyCancelOrderButton from "../../components/waiterHub/ModifyCancelOrderButton";
import ChangeMenuButton from "../../components/waiterHub/ChangeMenuButton";
import NavBarWaiterHub from "../../components/waiterHub/NavBarWaiterHub";


const WaiterHub = () => {
    return (

        <div className="w-full h-screen bg-redder">
            <div className="flex justify-evenly space-x-4 flex-nowrap flex-row w-screen h-3/4">
                <div class="w-80 mt-12 bg-lemon rounded-[25px] pl-3">Order</div>

                <div class="w-80 mt-12 bg-lemon rounded-[25px] pl-3">Ready</div>

                <div class="w-80 mt-12 bg-lemon rounded-[25px] pl-3">Customer Help</div>

            </div>
            <NewOrderButton />
            <ModifyCancelOrderButton />
            <ChangeMenuButton />
        </div>
    );
}

export default WaiterHub