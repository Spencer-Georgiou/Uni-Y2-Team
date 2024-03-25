import NewOrderButton from "../../components/waiterHub/NewOrderButton";
import ModifyCancelOrderButton from "../../components/waiterHub/ModifyCancelOrderButton";
import ChangeMenuButton from "../../components/waiterHub/ChangeMenuButton";
import DisplayOrders from "../../components/waiterHub/DisplayOrders";
import DisplayDelivering from "../../components/waiterHub/DisplayDelivering";
import DisplayDelivered from "../../components/waiterHub/DisplayDelivered";
import DisplayHelp from "../../components/waiterHub/DisplayDelivered";


const WaiterHub = () => {
    return (
        <div className="flex flex-col space-y-16 w-full h-screen bg-redder">
            <div className="flex justify-evenly flex-nowrap flex-row h-3/4 text-xl text-redder font-semibold">
                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5 overflow-y-scroll">
                        <div className="ml-4">Orders</div>
                        <div className="h-1 bg-redder">
                            <DisplayOrders confirmingButton={true} />
                        </div>
                    </div>
                </div>


                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5 overflow-y-scroll">
                        <div className="ml-4">Ready to Deliver</div>
                        <div className="h-1 bg-redder">
                            <DisplayDelivering />
                        </div>
                    </div>
                </div>

                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5 overflow-y-scroll">
                        <div className="ml-4">Delivered</div>
                        <div className="h-1 bg-redder">
                            <DisplayDelivered />
                        </div>
                    </div>
                </div>

                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5 overflow-y-scroll">
                        <div className="ml-4">Customers need help</div>
                        <div className="h-1 bg-redder">
                            <DisplayHelp />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly flex-nowrap flex-row font-semibold text-xl">
                <div className="bg-amber w-80 flex justify-center rounded-lg size-20 ">
                    <NewOrderButton />
                </div>
                <div className=" bg-amber w-80 flex justify-center rounded-lg size-20">
                    <ModifyCancelOrderButton />
                </div>
                <div className=" bg-amber w-80 flex justify-center rounded-lg size-20">
                    <ChangeMenuButton />
                </div>
            </div>
        </div>
    );
}

export default WaiterHub