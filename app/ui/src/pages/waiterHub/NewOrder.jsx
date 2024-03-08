import MenuNew from "../../components/newOrder/MenuNew";
import ConfirmOrderButton from "../../components/newOrder/ConfirmOrderButton";
import { useState } from "react";


const NewOrder = () => {
    const [addedOrder, setAddedOrder] = useState([]);

    const orderNewItem = (newOrder) => {
        setAddedOrder([...addedOrder, newOrder]);
        console.log(addedOrder)
    }






    return (
        <div className="w-screen h-screen bg-redder flex items-center justify-center">

            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row space-x-4">
                <div className="flex justify-start flex-nowrap">
                    <MenuNew orderNewItem={orderNewItem} />
                    {/* This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section.  */}
                </div>



                <div className="flex flex-col justify-end ">

                    <div className="flex flex-col flex-nowrap h-full w-60 bg-yellow-200 rounded-[25px] space-y-2 ">
                        {addedOrder.map((order, index) => (
                            <div className="flex justify-start text-black text-lg font-sans font-bold " key={index}>
                                <span className="text-cherry">
                                    {order.name}
                                </span>
                                <br />
                                <span>
                                    Quantity: {order.quantity}
                                    <br />
                                    Price: £{order.quantity * order.price}
                                </span>
                                <br />
                            </div>
                        ))}
                    </div>
                    <ConfirmOrderButton />

                </div>
            </div>
        </div>
    );
}

export default NewOrder