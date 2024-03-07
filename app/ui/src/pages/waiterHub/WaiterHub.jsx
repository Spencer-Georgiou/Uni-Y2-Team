import NewOrderButton from "../../components/waiterHub/NewOrderButton";
import ModifyCancelOrderButton from "../../components/waiterHub/ModifyCancelOrderButton";
import ChangeMenuButton from "../../components/waiterHub/ChangeMenuButton";
import NavBarWaiterHub from "../../components/waiterHub/NavBarWaiterHub";


const WaiterHub = () => {
    return (
        <div className="flex flex-col space-y-16 w-full h-screen bg-redder">
            <div className="flex justify-evenly flex-nowrap flex-row h-3/4 text-xl text-redder font-semibold">
                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5">
                        <div className="ml-4">Orders</div>
                        <div className="h-1 bg-redder"></div>
                    </div>
                </div>

                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5">
                        <div className="ml-4">Ready</div>
                        <div className="h-1 bg-redder"></div>
                    </div>
                </div>

                <div class="flex w-80 mt-12 bg-lemon rounded-[25px]">
                    <div className="flex flex-col space-y-1 w-full mt-5">
                        <div className="ml-4">Customers need help</div>
                        <div className="h-1 bg-redder"></div>
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