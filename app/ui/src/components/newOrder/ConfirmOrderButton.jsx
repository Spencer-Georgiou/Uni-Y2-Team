import { useNavigate } from "react-router-dom";

function ConfirmOrderButton({ addedOrder, tableNumber }) {
  const navigate = useNavigate();


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
    const postingOrder = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Make the POST request to the API
    fetch('/api/order', postingOrder)
      .then(response => {
        if (!response.ok) {
          throw new Error('Check if there is already an order under this table. If so, modify that order instead.');
        }
        return response.json();
      })
      .then(data => {
        alert('Order confirmed successfully:', data);
        navigate('/WaiterHub');
      })
      .catch(error => {
        alert('There was a problem confirming the order: ' + error.message, error);
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



