import { Button } from 'flowbite-react';

function SolvedButton({ orderId, onOrderDelivered }) {
  const handleReady = () => {

    const patchData = {
      id: orderId,
      calling_waiter: false
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
          throw new Error('Failed to mark table problem as solved');
        }
        onOrderDelivered(orderId);
        
      })
      .catch(error => {
        console.error('Error marking table problem as solved:', error);
        // Handle error, display an error message to the user
      });

      
      
  };

  return (
    <Button  color="success" onClick={handleReady}>Problem Solved</Button>
  );
}

export default SolvedButton;




