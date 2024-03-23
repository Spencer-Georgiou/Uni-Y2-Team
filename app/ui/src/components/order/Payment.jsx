import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const Payment = ({ openPay, setOpenPay, url }) => {
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
              <b className="text-amber ">Pay direactly</b>
            </p>
            <p className="underline hover:text-cherry">Call Waiter</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
