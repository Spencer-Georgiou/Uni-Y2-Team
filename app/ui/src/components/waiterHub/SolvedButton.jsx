import { Button } from 'flowbite-react';

function SolvedButton({ orderId, onProblemSolved }) {
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
          throw new Error('Failed to mark order as ready');
        }
        // Handle success, maybe display a success message
        onProblemSolved(orderId);
      })
      .catch(error => {
        console.error('Error marking order as ready:', error);
        // Handle error, display an error message to the user
      });

      window.location.reload();
  };

  return (
    <Button  color="success" onClick={handleReady}>Problem Solved</Button>
  );
}

export default SolvedButton;




