'use client'
import SolvedButton from "../../components/waiterHub/SolvedButton";
import { useState, useEffect, useRef } from "react";
// This function is what fetches data at every interval.

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function DisplayHelp() {
    const tableNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const [tables, setTables] = useState([]);
    const [orders, setOrders] = useState([]);
    const [fetchedOrderIds, setFetchedOrderIds] = useState(new Set());

    useEffect(() => {
        fetchTables();
    }, []);

    useInterval(() => {
        fetchTables();
    }, 5000);

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
            .then(table => {
                fetchOrder(table.order.id); // Fetch order for the fetched table
                return table;

            })
            .catch(error => {
                console.error(`Error fetching order ${tableNumber}:`, error);
                return null;
            });
    };

    // Fetching the orders.
    const fetchOrder = (tableId) => {
        return fetch(`/api/order?id=${tableId}`)
            .then(response => response.json())
            .then(json => {
                // Only add orders with status "Delivering"
                if (json.calling_waiter !== true && fetchedOrderIds.has(json.id)) {
                    const newFetchedOrderIds = new Set(fetchedOrderIds);
                    newFetchedOrderIds.delete(json.id);
                    setFetchedOrderIds(newFetchedOrderIds);
                    setOrders(prevOrders => prevOrders.filter(order => order.id !== json.id));
                }
                if (json.calling_waiter === true && !fetchedOrderIds.has(json.id)) {
                    setFetchedOrderIds(prevIds => new Set([...prevIds, json.id]));
                    setOrders(prevOrders => [...prevOrders, json]);
                    console.log(orders);
                }
            })
    };

    const handleOrderDelivered = (orderId) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    };

    return (
        <div className="flex flex-col space-y-2">

            {orders.map((order) => (
                <div className="flex flex-row font-sans" key={order.id}>
                    <div className="flex flex-col w-full text-black mt-8 space-y-2">
                        <div className="flex ml-4 text-redder text-xl font-bold">
                            Table Number: {order.table_number}
                        </div>

                        <div className="flex ml-4">
                            <SolvedButton orderId={order.id} onOrderDelivered={handleOrderDelivered} />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayHelp