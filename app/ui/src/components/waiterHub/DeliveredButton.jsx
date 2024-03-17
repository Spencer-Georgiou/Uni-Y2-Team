import { Button } from 'flowbite-react';


function DeliveredButton({ orderId }) {


  const handleReady = () => {

    const patchData = {
      id: orderId,
      status: 'Delivered',
      confirmed_by_waiter: true
    };

    fetch(`/api/order`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then(response => {
        if (!response.ok) {
          console.log(patchData);
          console.log(orderId);
          throw new Error('Failed to mark order as ready');

        }
        // Handle success, maybe display a success message
      })
      .catch(error => {
        console.error('Error marking order as ready:', error);
        // Handle error, display an error message to the user
      });

      window.location.reload();
  };

  return (
    <Button color="success" onClick={handleReady}>Delivered</Button>
  );
}

export default DeliveredButton;
