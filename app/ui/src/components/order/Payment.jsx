import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Payment = ({ openPay, setOpenPay, url }) => {
  const tableNumber = useSelector((state) => state.table);
  //store the order information
  const [order, setOrder] = useState({});
  
  //using table number to fetch order id from the database
  async function fetchTable(tableNumber) {
    return fetch(`/api/table?number=${tableNumber}`)
      .then((response) => {
        //if the request failed, throw error
        if (!response.ok) {
          throw new Error(`Failed to fetch table ${tableNumber}`);
        }
        return response.json();
      })
      .then((table) => {
        fetchOrder(table.order.id); // Fetch specfic order for the fetched table
        return table;
      })
      .catch((error) => {
        console.error(`Error fetching order ${tableNumber}:`, error);
        return null;
      });
  }

  //get the specfic order details by order id
  async function fetchOrder(tableId) {
    return fetch(`/api/order?id=${tableId}`)
      .then((response) => response.json())
      .then((json) => {
        //once sucessfully find the order, set it to order state
        setOrder(json);
      });
  }

  const sendCall = () => {
    const patchData = {
      id: parseInt(tableNumber),
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
              <b>Pay Online (recommended)</b>
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
            <p className="underline hover:text-cherry" onClick={sendCall}>Call Waiter</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
