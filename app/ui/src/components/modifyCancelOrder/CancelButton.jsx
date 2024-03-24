'use client'
import { useNavigate } from "react-router-dom";

{/*Button which allows waiters to cancel an order.*/ }
function CancelButton({ orderId }) {

  const navigate = useNavigate();

  const handleCancelling = () => {
    fetch(`/api/order?id=${orderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete order');
        }
        // Handle success, maybe display a success message
      })
      .catch(error => {
        console.log('Error from api:', error);
        // Handle error, display an error message to the user
      });

    alert("order cancelled");
    navigate("/WaiterHub");
  }




  return (

    <button type="button" onClick={handleCancelling} className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-yellow-200 hover:text-cherry">
      Cancel Order
    </button>

  );
}

export default CancelButton