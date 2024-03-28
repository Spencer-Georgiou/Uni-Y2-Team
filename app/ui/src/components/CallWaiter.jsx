"use client";
import { useSelector } from "react-redux";

{/*Button that alerts the waiter that a customer needs assistance when pressed*/}
const CallWaiter = () => {
    const tableNumber = useSelector((state) => state.table);
    
    const SendCall = () => {
        const patchData = {
        id: parseInt(tableNumber),
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