"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function TableNumber({ openModal, setOpenModal, setShowProgress }) {
  const cart = useSelector((state) => state.cart);
  //  This is the final order for posting to back-end
  const [order, setOrder] = useState({
    table_number: 0,
    //stores all the item name and quantity
    menuitem_associations: [],
  });

  //to form the data in final order
  function handleCheckOut() {
    cart.map((item) =>
      order.menuitem_associations.push({
        menuitem_name: item.name,
        quantity: parseInt(item.quantity),
      })
    );
    console.log(order);
  }

  //post the data to back-end
  function handleSubmit() {
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
        } else alert("error here");
      })
      .then()
      .catch((error) => {
        console.error("there was an error", error);
      });
  }

    return (
        <div class="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" style={{ backgroundImage: "url('/images/TableNumberBanner.png')" }}>
            <form className="h-[300px] w-[500px] rounded-[25px] py-5 m-auto bg-cherry px-6">
            <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                Order
            </div>
            <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                Please Enter Your Table Number
            </div>
            <div className="mb-5 ">
                <b><input type="text" id="tableNumber" value={tableNumber} onChange={handleTableNumber} name="tableNumber" className="text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5 focus:ring-4 focus:ring-amber" placeholder="Table Number" required /></b>
            </div>
            <div className="flex justify-center">
                <Button type="submit" className="h-16 font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center text-cherry hover:ring-4 hover:ring-amber focus:ring-amber">Enter</Button>
            </div>
            </form>
        </div>
      </Modal>
    </>
  );
}

export default TableNumber;
