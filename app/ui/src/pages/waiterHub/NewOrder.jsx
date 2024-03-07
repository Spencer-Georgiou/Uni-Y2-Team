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

            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row justify-end">
                <div className="flex flex-nowrap">
                    <MenuNew orderNewItem={orderNewItem} />
                    {/* This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section.  */}
                </div>



                <div className="flex flex-col ">

                    <div className="flex flex-col flex-nowrap h-full w-full bg-yellow-200 rounded-[25px] ">
                        {addedOrder.map((order, index) => (
                            <div className="flex text-black text-xl  font-sans font-bold " key={index}>
                                {order.name}
                                <br/>
                                Quantity: {order.quantity}
                                <br/>
                                Price: £{order.quantity * order.price}
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