import MenuNew from "../../components/newOrder/MenuNew";
import ConfirmOrderButton from "../../components/newOrder/ConfirmOrderButton";


const NewOrder = () => {
    return(
        <div className="w-screen h-screen bg-redder flex items-center justify-center">
            
            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row justify-end">
                <div className="flex flex-nowrap">
                    <MenuNew />
                    {/* This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section.  */}
                </div>



                <div className="flex flex-col ">

                    <div className="flex flex-nowrap h-full w-full bg-yellow-200 rounded-[25px] ">
                        This is where the order will be displayed
                    </div>
                    <ConfirmOrderButton />

                </div>
            </div>
        </div>
    );
}

export default NewOrder