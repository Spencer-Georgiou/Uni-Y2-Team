import ReadyAndOrderDisplay from "../../components/kitchenHub/ReadyAndOrderDisplay";
import DisplayOrders from "../../components/waiterHub/DisplayOrders";
import ReadyButton from "../../components/kitchenHub/ReadyButton";



const KitchenHub = () => {
    return (
        <div className="flex flex-col space-y-16 w-full h-screen bg-redder justify-center items-center ">
            <div className="flex h-5/6 w-5/6 bg-lemon flex-col space-y-1 mt-5 text-xl text-redder font-semibold">
                <div className="ml-4">Confirmed Orders</div>
                <div className="h-1 bg-redder"></div>
                <div className="flex">
                    <DisplayOrders readyButton={true} />
                </div>
            </div>
        </div>

    );
}

export default KitchenHub