import { Button } from 'flowbite-react';

function FinishedButton({ orderId }) {
  const handleReady = () => {


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


      window.location.reload();
  };






  return (
    <Button color="success" onClick={handleReady}>Finished Order</Button>
  );
}

export default FinishedButton;
