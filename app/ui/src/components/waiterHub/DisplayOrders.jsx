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
                    setTables(prevTables => [...prevTables, table]);
                })
                .catch(error => {
                    console.error(`Error fetching table ${tableNumber}:`, error);
                });
        });
    };

    const fetchTable = (tableNumber) => {

        return fetch(`/api/table?number=${tableNumber}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch table ${tableNumber}`);
                }
                return response.json();
            })
            .then(response => {
                fetchOrder(response.order.id); // Fetch order for the fetched table
                return response.json();
            })
            .catch(error => {
                console.error(`Error fetching order ${tableNumber}:`, error);
                return null;
            });
    };


    const fetchOrder = (tableId) => {
        return fetch(`/api/order?id=${tableId}`)
            .then(response => response.json())
            .then(json =>
                setOrders(prevOrders => [...prevOrders, json]))
    };



    return (
        <div className="flex flex-col space-y-2">

            {orders.map((order) => (
                <div className="flex font-sans" key={order.id}>
                    <div className="flex flex-col w-full text-black mt-8 space-y-2">
                        <div className="flex ml-4 text-redder text-xl font-bold">
                            Table Number: {order.table_number}
                        </div>
                        <div className="flex ml-14 text-lg font-semibold">
                            Status: {order.status}
                        </div>

                        <div className="flex ml-14 text-lg font-semibold">
                            TimeCreated: {order.time_created}
                        </div>
                    </div>

                </div>
            ))}



        </div>



    );
}

export default DisplayOrders