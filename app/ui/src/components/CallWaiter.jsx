"use client";
import { useSelector } from "react-redux";
import { useState } from "react";

{/*Button that alerts the waiter that a customer needs assistance when pressed*/}
const CallWaiter = () => {
    const tableNumber = useSelector((state) => state.table);
    //store the order information
    const [order, setOrder] = useState({});
    
    //using table number to fetch order id from the database
  async function fetchTable(tableNumber) {
    return fetch(`/api/table?number=${tableNumber}`)
      .then((response) => {
        //if the request failed, throw error
        if (!response.ok) {
          throw new Error(`Failed to fetch table ${tableNumber}`);
        }
        return response.json();
      })
      .then((table) => {
        fetchOrder(table.order.id); // Fetch specfic order for the fetched table
        return table;
      })
      .catch((error) => {
        alert(`Please call the waiter after placing an order`);
      });
  }

  //get the specfic order details by order id
  async function fetchOrder(tableId) {
    return fetch(`/api/order?id=${tableId}`)
      .then((response) => response.json())
      .then((json) => {
        //once sucessfully find the order, set it to order state
        setOrder(json);
      });
  }

    const SendCall = () => {
      const currentOrder = fetchTable(tableNumber);

        const patchData = {
        id: order.id,
        calling_waiter: true
        };

    fetch('/api/order', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to call a waiter');
        }
        alert("A waiter will be with you shortly")
      })
      .catch(error => {
        console.error('Error calling waiter:', error);
      });
    }

    return (
        <button
          type="button"
          onClick={SendCall}
          className="px-1.5 font-sans font-semibold text-cherry bg-lemon hover:ring-4 hover:ring-amber focus:ring-amber rounded">Call Waiter
        </button>
    );
}

export default CallWaiter;