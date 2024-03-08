import MenuNew from "../../components/newOrder/MenuNew";
import ConfirmOrderButton from "../../components/newOrder/ConfirmOrderButton";
import { useState } from "react";


const NewOrder = () => {

    const [addedOrder, setAddedOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [tableNumber, setTableNumber] = useState(null);

    const handleSetTableNumber = (number) => {
        setTableNumber(number);
    };


    const orderNewItem = (newOrder) => {
        const newAddedOrder = [...addedOrder, newOrder];
        setAddedOrder(newAddedOrder);

        const newTotalPrice = newAddedOrder.reduce((acc, order) => acc + order.price * order.quantity, 0);
        setTotalPrice(newTotalPrice);

    }
    console.log(tableNumber);



    return (
        <div className="w-screen h-screen bg-redder flex items-center justify-center">

            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row space-x-4">
                <div className="flex justify-start flex-nowrap">
                    <MenuNew orderNewItem={orderNewItem} onSetTableNumber={handleSetTableNumber} />
                    {/* This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section.  */}
                </div>



                <div className="flex flex-col justify-end space-y-4">
                    <div className="flex justify-start h-10 max-w-full text-black text-2xl font-sans font-bold">
                        Table Number : {tableNumber}
                    </div>

                    <div className="flex flex-col flex-nowrap h-full w-60 bg-yellow-200 rounded-[25px] space-y-10 overflow-auto">
                        {addedOrder.map((order, index) => (
                            <div className="flex font-sans font-bold mt-5 ml-2" key={index}>

                                <div className="w-full text-cherry justify-start text-xl break-words space-y-2 list-disc">
                                    {order.name}
                                    <br />
                                    <div className="flex justify-center w-full text-black text-lg ">
                                        Quantity: {order.quantity}
                                        <br />
                                        Price: £{order.price * order.quantity}
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-start h-10 w-full font-sans font-bold text-2xl">
                        Total Price : £{totalPrice}
                    </div>
                    <ConfirmOrderButton />

                </div>
            </div>
        </div>
    );
}

export default NewOrder