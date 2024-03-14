// import ReadyAndOrderDisplay from "../../components/kitchenHub/ReadyAndOrderDisplay";
import DisplayKitchen from "../../components/kitchenHub/DisplayKitchen";



const KitchenHub = () => {
    return (
        <div className="flex flex-col space-y-16 w-full h-screen bg-redder justify-center items-center ">
            <div className="flex h-5/6 w-2/6 bg-lemon flex-col space-y-1 mt-5 text-3xl text-redder font-semibold">
                <div className="ml-4">Confirmed Orders</div>
                <div className="h-2 bg-redder"></div>
                <div className="flex overflow-y-scroll">
                    <DisplayKitchen />
                </div>
            </div>
        </div>

    );
}

export default KitchenHub


