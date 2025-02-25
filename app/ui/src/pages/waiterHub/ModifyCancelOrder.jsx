// Page where the waiter can modify or cancel an order.

import UpdateOrderButton from "../../components/modifyCancelOrder/UpdateOrderButton";
import CancelButton from "../../components/modifyCancelOrder/CancelButton";
import NoCancellingAllowedButton from "../../components/modifyCancelOrder/NoCancellingAllowedButton";
import NoModifyingAllowedButton from "../../components/modifyCancelOrder/NoModifyingAllowedButton";
import MenuModify from "../../components/modifyCancelOrder/MenuModify";
import { useState } from "react";


const ModifyCancelOrder = () => {

    const [tableNumber, setTableNumber] = useState(null);
    const [fetchedOrder, setFetchedOrder] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);

    // Fetches the current order at this table, so that it can be displayed and modified
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
                alert('no order associated with this table');
                window.location.reload();
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

    // Shows both original order items, and newly added items.
    const showMenuItems = (menuItems) => {
        return menuItems.map((item, index) => (
            <div className="w-full space-y-2 text-cherry justify-start text-xl break-words list-disc">
                {item.menuitem_name && <span>{item.menuitem_name}</span>}
                {item.name && <span>{item.name}</span>}
                <br />
                <div className="flex justify-center w-full text-black text-lg ">
                    Quantity: {item.quantity}
                </div>
            </div>
        ));
    };

    // Only display the 'cancel' button if it's in state 'Confirming'
    const checkCancelButton = (orderStatus) => {
        if (orderStatus === "Confirming") {
            return <CancelButton orderId={orderId} />
        } else {
            return <NoCancellingAllowedButton />
        }
    };

    // Only display the 'update order' button is it's in state 'Confirming'/'Preparing'
    const checkModifyButton = (orderStatus) => {
        if (orderStatus === "Confirming" || orderStatus === "Preparing") {
            return <UpdateOrderButton orderId={orderId} fetchedOrder={fetchedOrder} />
        } else {
            return <NoModifyingAllowedButton />
        }
    };



    // This is to add new items to the fetched order.
    const orderNewItem = (extraItem) => {
        if (fetchedOrder) {
            const updatedOrder = { ...fetchedOrder };
            updatedOrder.menuitem_associations.push(extraItem);
            setFetchedOrder(updatedOrder);
        }
    }


    return (
        <div className="w-screen h-screen bg-redder flex items-center justify-center">
            <div className="h-5/6 w-5/6 bg-lemon p-4 flex flex-row space-x-4">
                <div className="flex justify-start flex-nowrap">
                    <MenuModify orderNewItem={orderNewItem} onSetTableNumber={handleSetTableNumber} />
                </div>
                <div className="flex flex-col justify-end space-y-4">
                    <div className="flex justify-start h-10 max-w-full text-black text-2xl font-sans font-bold">
                        Table Number : {tableNumber}
                    </div>
                    <div className="flex flex-col flex-nowrap h-full w-60 bg-yellow-200 rounded-[25px] space-y-10 overflow-auto">
                        {fetchedOrder &&
                            <div className="flex font-sans font-bold mt-5 ml-2" key={fetchedOrder.id}>
                                <div className="flex flex-col w-full text-black space-y-8">
                                    {showMenuItems(fetchedOrder.menuitem_associations)}
                                </div>
                            </div>
                        }
                    </div>
                    {checkModifyButton(orderStatus)}
                    {checkCancelButton(orderStatus)}
                </div>
            </div>
        </div>
    );
}

export default ModifyCancelOrder