import { Button } from 'flowbite-react';

function ConfirmedButton({ orderId }) {
  const handleReady = () => {
    const patchData = {
      id: orderId,
      status: 'Preparing',
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
        throw new Error('Failed to mark order as ready');
      }
      // Handle success, maybe display a success message
    })
    .catch(error => {
      console.error('Error marking order as ready:', error);
      // Handle error, display an error message to the user
    });
  };

  return (
    <Button color="success" onClick={handleReady}>Confirmed</Button>
  );
}

export default ConfirmedButton;
