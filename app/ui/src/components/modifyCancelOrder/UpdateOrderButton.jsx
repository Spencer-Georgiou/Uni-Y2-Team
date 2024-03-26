// This file sends the PATCH request to the api to modify an order
import { useNavigate } from "react-router-dom";

function UpdateOrderButton({ orderId, fetchedOrder }) {
  const navigate = useNavigate();

  const handleUpdateOrder = () => {
    // Delete existing order
    fetch(`/api/order?id=${orderId}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete existing order");
      }
      // After deleting, send POST request to create new order
      createNewOrder();
    })
    .catch(error => {
      // Handle errors
      console.error("Error deleting existing order:", error);
    });
  };

  const createNewOrder = () => {
    // Construct the request body
    const requestBody = {
      table_number: fetchedOrder.table_number,
      menuitem_associations: fetchedOrder.menuitem_associations.map(item => ({
        menuitem_name: item.menuitem_name || item.name, // Use menuitem_name if available, otherwise fallback to name
        quantity: item.quantity
      }))
    };

    // Send POST request to /api/order
    fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to update order");
      }
      // Handle successful response
      alert('Order confirmed successfully:', response);
      navigate('/WaiterHub');
    })
    .catch(error => {
      // Handle errors
      console.error("Error updating order:", error);
    });
  };

  return (
    <button
      type="button"
      className="bg-amber text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-cherry hover:text-lemon"
      onClick={handleUpdateOrder}
    >
      Update Order
    </button>
  );
}

export default UpdateOrderButton;
