import UpdateOrderButton from "../../components/modifyCancelOrder/UpdateOrderButton";
import CancelButton from "../../components/modifyCancelOrder/CancelButton";

const ModifyCancelOrder = () => {
    return(
        <div className="w-screen h-screen bg-redder flex items-center justify-center">

            
            <div className="h-4/5 w-4/5 bg-lemon p-4 flex flex-row">

                <div className="flex flex-nowrap">
                    This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section. 
                </div>



                <div className="flex flex-col ">

                    <div className="flex flex-nowrap h-full w-full bg-yellow-200 rounded-[25px] allign-right">
                        This is where the order will be displayed
                    </div>

                    <UpdateOrderButton />
                    <CancelButton />
                </div>
            </div>
        </div>
    );
}

export default ModifyCancelOrder