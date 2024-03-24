'use client';
import Cookies from 'js-cookie';
import { Button } from 'flowbite-react';

function DeliveredButton({ orderId, onOrderDelivered }) {
  const handleReady = () => {

    const cookieUsername = Cookies.get('username');
    console.log('username of cookie', cookieUsername);

    const patchData = {
      id: orderId,
      status: 'Delivered',
      username: cookieUsername
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
        // Call the callback function to update orders
        onOrderDelivered(orderId);
      })
      .catch(error => {
        console.error('Error marking order as ready:', error);
      });
  };

  return (
    <Button color="success" onClick={handleReady}>Delivered</Button>
  );
}

export default DeliveredButton
