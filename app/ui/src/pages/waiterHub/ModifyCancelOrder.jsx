import UpdateOrderButton from "../../components/modifyCancelOrder/UpdateOrderButton";
import CancelButton from "../../components/modifyCancelOrder/CancelButton";
import NoCancellingAllowedButton from "../../components/modifyCancelOrder/NoCancellingAllowedButton";
import MenuModify from "../../components/modifyCancelOrder/MenuModify";
import MenuNew from "../../components/newOrder/MenuNew";
import { useState, useEffect } from "react";


const ModifyCancelOrder = ({ orderNewItem }) => {

    const [tableNumber, setTableNumber] = useState(null);
    const [fetchedOrder, setFetchedOrder] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);




    useEffect(() => {
        fetchTable();
    }, []);


    const fetchTable = (tableNumber) => {
        return fetch(`/api/table?number=${tableNumber}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch table ${tableNumber}`);
                }
                return response.json();
            })
            .then((table) => {
                setOrderId(table.order.id);
                fetchOrder(table.order.id); // Fetch order for the fetched table

                return table;
            })
            .catch((error) => {
                console.error(`Error fetching order ${tableNumber}:`, error);
                return null;
            });
    };

    const fetchOrder = (tableId) => {
        return fetch(`/api/order?id=${tableId}`)
            .then((response) => response.json())
            .then((order) => {
                setOrderStatus(order.status);
                setFetchedOrder(order);

            })
            .catch((error) => {
                console.error(`Error fetching order:`, error);
                //alert("no order exists for this table, please enter a different one");
            });

    };


    const handleSetTableNumber = (number) => {
        setTableNumber(number);
        fetchTable(number);
    };

    const showMenuItems = (menuItems) => {
        return menuItems.map((item, index) => (
            <div className="flex text-lg font-semibold">
                <div className="flex flex-col ml-4 space-y-2">
                    <div className="flex ml-4 text-amber">
                        Item-Name: {item.menuitem_name}
                        {/* <span className="text-black">  Quantity: {item.quantity}</span> */}
                    </div>

                    <div className="flex ml-6">Quantity: {item.quantity}</div>
                </div>
            </div>
        ));
    };

    const checkCancelButton = (orderStatus) => {
        console.log(orderStatus);
        if (orderStatus === "Confirming") {
            return <CancelButton orderId={orderId} />
        } else {
            return <NoCancellingAllowedButton />
        }
    };


    return (
        <div className="w-screen h-screen bg-redder flex items-center justify-center">

            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row space-x-4">
                <div className="flex justify-start flex-nowrap">
                    <MenuModify orderNewItem={orderNewItem} onSetTableNumber={handleSetTableNumber} />
                    {/* This will be the menu section. This will be the menu section. This will be the menu section. This will be the menu section.  */}
                </div>

                <div className="flex flex-col justify-end space-y-4">
                    <div className="flex justify-start h-10 max-w-full text-black text-2xl font-sans font-bold">
                        Table Number : {tableNumber}
                    </div>

                    <div className="flex flex-col flex-nowrap h-full w-60 bg-yellow-200 rounded-[25px] space-y-10 overflow-auto">
                        <div className="flex flex-col space-y-2">

                            {fetchedOrder &&
                                <div className="flex flex-row font-sans" key={fetchedOrder.id}>
                                    <div className="flex flex-col w-full text-black mt-8 space-y-2">
                                        <div className="flex ml-4 text-redder text-xl font-bold">
                                            Table Number: {fetchedOrder.table_number}
                                        </div>
                                        {showMenuItems(fetchedOrder.menuitem_associations)}
                                    </div>

                                </div>
                            }
                        </div>


                    </div>

                    <UpdateOrderButton />
                    {checkCancelButton(orderStatus)}
                </div>
            </div>
        </div>
    );
}

export default ModifyCancelOrder