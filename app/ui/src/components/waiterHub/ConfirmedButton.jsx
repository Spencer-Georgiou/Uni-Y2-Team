import { Button } from 'flowbite-react';
import { useState } from 'react';
import Cookies from 'js-cookie';


function ConfirmedButton({ orderId, onOrderDelivered }) {
  const [buttonColour, setButtonColour] = useState('green');
  const [textColour, setTextColour] = useState('white');

  const handleReady = () => {
    setButtonColour('transparent');
    setTextColour('transparent');

    const cookieUsername = Cookies.get('username'); //the cookie set stores the username of the waiter logged in

    const patchData = {
      id: orderId,
      status: 'Preparing',
      waiter_username: cookieUsername //the username stored in the cookie will be sent in the patch request so that the waiter that logged in and confirmed the order will be assigned to that table
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
        onOrderDelivered(orderId);
        // Handle success, maybe display a success message
      })
      .catch(error => {
        console.error('Error marking order as ready:', error);
        // Handle error, display an error message to the user
      });
  };

  return (
    <Button style={{ backgroundColor: buttonColour, color: textColour, outline: 'transparent' }} onClick={handleReady}>Confirm Order</Button>
  );
}

export default ConfirmedButton;
