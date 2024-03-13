'use client'

import { useState, useEffect } from "react";


function DisplayOrders() {
    const tableNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const [tables, setTables] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchTables();
    }, []);

    const fetchTables = () => {        
        tableNumbers.forEach(tableNumber => {
            
            fetchTable(tableNumber)
                .then(table => {
                    if (table !== null) {
                        setTables(prevTables => [...prevTables, table]);
                    }
                })
                .catch(error => {
                    console.error(`Error fetching table ${tableNumber}:`, error);
                });
        });
    };

    const fetchTable = (tableNumber) => {

        return fetch('/api/table/{tableNumber}')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch table ${tableNumber}`);
                }
                return response.json();
            })
            // .then(json => {
            //     fetchOrder(json.id); // Fetch order for the fetched table
            //     return json;
            // })
            // .catch(error => {
            //     console.error(`Error fetching order ${tableNumber}:`, error);
            //     return null;
            // });
    };


    const fetchOrder = (tableId) => {
        return fetch('/api/order/${tableNumber}')
            .then(response => response.json())
            .then(json => 
                setOrders(prevOrders => [...prevOrders, json]))
    };



  return (
    <div className="flex flex-col space-y-1 w-full mt-5">
        <div className="ml-4">
            Orders
            {tables}
            {orders}
            </div>
        <div className="h-1 bg-redder"></div>


        {orders.map((order) => (
                <div className="flex font-sans font-bold mt-5 ml-2" key={order.id}>
                    <div className="w-full text-cherry justify-start text-xl break-words space-y-2 list-disc">
                        {order.table_number}
                        <br />
                        <div className="flex justify-center w-full text-black text-lg ">
                            Status: {order.status}
                            <br />
                            TimeCreated: {order.time_created}
                        </div>
                    </div>
                    <br />
                </div>
            ))}



    </div>



  );
}

export default DisplayOrders