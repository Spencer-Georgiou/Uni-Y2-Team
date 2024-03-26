import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const Payment = ({ openPay, setOpenPay, url }) => {
  const CallWaiter = () => {
    const patchData = {
      id: 1,
      calling_waiter: true
    };

    fetch('/api/order', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patchData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to call a waiter');
        }
        alert("A waiter will be with you shortly")
      })
      .catch(error => {
        console.error('Error calling waiter:', error);
      });
  }

  return (
    <>
      {/* the open modal of entering table number */}
      <Modal show={openPay} size="sm" onClose={() => setOpenPay(false)}>
        <Modal.Header>Choose a way to pay</Modal.Header>
        <Modal.Body>
          <div className="w-auto h-auto bg-teal-100 px-[30px] py-3">
            <p className="text-green-500">
              <b>Pay Online (recommened)</b>
            </p>
            <Link
              to={url}
              target="_blank"
              className="underline hover:text-cherry"
            >
              Click here to Pay
            </Link>
          </div>
          <div className="w-auto h-auto bg-yellow-100 px-[30px] p-3">
            <p>
              <b className="text-amber ">Pay directly</b>
            </p>
            <p className="underline hover:text-cherry" onClick={CallWaiter}>Call Waiter</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
