import { Button } from 'flowbite-react';
import Cookies from 'js-cookie';
import { useState } from 'react';

function ReadyButton({ orderId, onOrderDelivered }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleReady = () => {

    const cookieUsername = Cookies.get('username');
    console.log('username of cookie', cookieUsername);

    const patchData = {
      id: orderId,
      status: 'Delivering',
      waiter_username: cookieUsername
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

    setIsPressed(true);
    onOrderDelivered(orderId);
    // window.location.reload();

  };

  return (
    <Button color="success" setIsPressed={setIsPressed} onClick={handleReady} >Ready</Button>
  );
}

export default ReadyButton;
