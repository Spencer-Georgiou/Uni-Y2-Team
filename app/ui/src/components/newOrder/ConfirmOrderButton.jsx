import React, { useState, useEffect } from "react"

function ConfirmOrderButton({ addedOrder, tableNumber }) {
  const handleConfirmOrder = () => {


    if (addedOrder.length === 0) {
      alert('Please add an item to the order!');
      return;
    }

    // Create an array of menuItem associations
    const menuitemAssociations = addedOrder.map(order => ({
      menuitem_name: order.name, // Assuming the name property corresponds to the menu item name
      quantity: order.quantity
    }));

    // Create the data object to be sent to the API
    const data = {
      table_number: tableNumber,
      menuitem_associations: menuitemAssociations
    };

    // Define the fetch options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Make the POST request to the API
    fetch('/api/order', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Order confirmed successfully:', data);
      })
      .catch(error => {
        console.error('There was a problem confirming the order:', error);
      });
  };

  return (
    <button
      type="button"
      className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-amber hover:text-lemon"
      onClick={handleConfirmOrder}
    >
      Confirm Order
    </button>
  );
}

export default ConfirmOrderButton;
