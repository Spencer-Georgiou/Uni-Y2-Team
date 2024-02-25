import NewOrderButton from "../../components/waiterHub/NewOrderButton";
import ModifyCancelOrderButton from "../../components/waiterHub/ModifyCancelOrderButton";
import ChangeMenuButton from "../../components/waiterHub/ChangeMenuButton";

const WaiterHub = () => {
    return(
        <div className="w-full h-screen bg-cherry">
            <div className="flex w-screen space-x-4">
                <div class="flex-1 bg-lemon rounded-[25px] pl-3">Order</div>

                <div class="flex-1 bg-lemon rounded-[25px] pl-3">Ready</div>

                <div class="flex-1 bg-lemon rounded-[25px] pl-3">Customer Help</div>

            </div>
            <NewOrderButton />
            <ModifyCancelOrderButton />
            <ChangeMenuButton />
        </div>
    );
}

export default WaiterHub