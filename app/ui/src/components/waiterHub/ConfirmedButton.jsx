import { Button } from 'flowbite-react';
import { useState } from 'react';

function ConfirmedButton({ orderId }) {
  const [buttonColour, setButtonColour] = useState('green');
  const [textColour, setTextColour] = useState('white');

  function ConfirmedButton({ orderId, onOrderDelivered }) {
    const [buttonColour, setButtonColour] = useState('green');
    const [textColour, setTextColour] = useState('white');

    const handleReady = () => {
      setButtonColour('transparent');
      setTextColour('transparent');

      const patchData = {
        id: orderId,
        status: 'Preparing',
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
