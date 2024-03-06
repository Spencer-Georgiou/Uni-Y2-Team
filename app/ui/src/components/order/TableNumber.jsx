"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function TableNumber({ openModal, setOpenModal }) {
  const [tableNumber, setTableNumber] = useState(0);
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <p className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
              Enter Your Table Number
            </p>

            <div className="mb-5 ">
              <b>
                <input
                  type="number"
                  onChange={(e) => setTableNumber(e.target.value)}
                  id="tableNumber"
                  name="tableNumber"
                  className="text-xl text-dark font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5 focus:ring-4 focus:ring-amber"
                  placeholder="Table Number"
                  required
                />
              </b>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                color="red"
                onClick={() => {
                  setOpenModal(false);
                  console.log(tableNumber);
                }}
              >
                <b>Order now</b>
              </Button>
              <Button color="green" onClick={() => setOpenModal(false)}>
                <b>cancel</b>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TableNumber;
