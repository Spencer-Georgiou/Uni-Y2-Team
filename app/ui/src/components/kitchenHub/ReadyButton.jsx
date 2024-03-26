import { Button } from 'flowbite-react';

function ReadyButton({ orderId, onOrderDelivered }) {

  /* This button is displayed at the bottom of each order in the confirmed 
  orders of kitchen hub and when it is pressed a patch request is sent to api/order which
  updates the status of the order to be delivering. This means that it will be shown in the 
  Ready to Deliver section so the waiter knows that it is ready to be delivered */

  const handleReady = () => {

    const patchData = {
      id: orderId,
      status: 'Delivering', //status updated so that it is shown in Ready to Deliver

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
    onOrderDelivered(orderId);
  };

  return (
    <Button color="success" onClick={handleReady}>Ready</Button>
  );
};

export default ReadyButton;
