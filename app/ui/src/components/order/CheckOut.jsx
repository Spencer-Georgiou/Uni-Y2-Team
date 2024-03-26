"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTableNumber } from "./redux/cartSlice";
import Payment from "./Payment";

// this is the component for user to enter table number
function CheckOut({ openModal, setOpenModal, setconfirm }) {
  //get the cart state from redux
  const cart = useSelector((state) => state.cart);
  //the table number
  const number = useSelector((state) => state.table);
  //the hook to use the function in redux
  const dispatch = useDispatch();
  //  This is the final order for posting to back-end
  const [order, setOrder] = useState({
    //the initial table number
    table_number: 0,
    //stores all the item name and quantity
    menuitem_associations: [],
  });
  const [url, setUrl] = useState({});
  const [openPay, setOpenPay] = useState(false);

  function handleCheckOut() {
    handleSubmit();
    console.log(number);
    fetchTable(number);
    setOpenPay(true);
    setconfirm(true);
  }

  //post the data to back-end
  function handleSubmit() {
    //to form the data in final order
    cart.map((item) =>
      order.menuitem_associations.push({
        menuitem_name: item.name,
        quantity: parseInt(item.quantity),
      })
    );

    //the information in the head
    const postingData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    };

    //post the data and get the response
    fetch("/api/order", postingData)
      .then((response) => {
        if (response.status === 200) {
          alert("order sucessfully!");
          return response.json();
        } else console.log("error");
      })
      .then()
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

  //useing table number to fetch order id from the database
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
        handlePayment(table.order.id); // Fetch specfic order for the fetched table
        return table;
      })
      .catch((error) => {
        console.error(`Error fetching order ${tableNumber}:`, error);
        return null;
      });
  }

  function handlePayment(orderId) {
    const id = { id: orderId };
    //the information in the head
    const postingData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    };

    //post the data and get the response
    fetch("/api/payment", postingData)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else console.log("error");
      })
      .then((json) => {
        console.log(json.payment_url);
        setUrl(json);
      })
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

  return (
    <>
      {/* the open modal of entering table number */}
      <Modal
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
        popup
      >
        <div
          class="bg-cover w-full h-full"
          style={{ backgroundImage: "url('/images/TableNumberBanner.png')" }}
        >
          <Modal.Header />

          <Modal.Body>
            <div className="text-center">
              <p className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                Enter Your Table Number
              </p>

              <div className="mb-5 ">
                <b>
                  {/* the input text field */}
                  <input
                    type="number"
                    onChange={(e) => {
                      // set the user input to final order and tableNumber in cart
                      dispatch(addTableNumber(e.target.value));
                      setOrder({
                        ...order,
                        table_number: parseInt(e.target.value),
                      });
                    }}
                    id="tableNumber"
                    name="tableNumber"
                    className="text-xl text-dark font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5 focus:ring-4 focus:ring-amber"
                    placeholder="Table Number"
                    required
                  />
                </b>
              </div>
              <div className="flex justify-center gap-4">
                {/* button to order */}
                <Button
                  color="red"
                  onClick={() => {
                    setOpenModal(false);
                    handleCheckOut();
                  }}
                >
                  <b>Order now</b>
                </Button>
                {/* button to close the windows */}
                <Button color="green" onClick={() => setOpenModal(false)}>
                  <b>cancel</b>
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
      <Payment
        openPay={openPay}
        setOpenPay={setOpenPay}
        url={url.payment_url}
      />
    </>
  );
}

export default CheckOut;
