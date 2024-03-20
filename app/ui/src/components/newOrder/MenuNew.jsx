"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import ModalNew from "../../components/newOrder/ModalNew";
import NewOrder from "../../pages/waiterHub/NewOrder";

// Buttons which waiter presses to filter menu
const filterButtons = [
  { name: "All", value: "All" },
  { name: "Starter", value: "Starter" },
  { name: "Main", value: "Main" },
  { name: "Dessert", value: "Dessert" },
  { name: "Soft Drink", value: "Soft Drink" },
  { name: "Beer", value: "Beer" },
  { name: "Cocktail", value: "Cocktail" },
  { name: "Hot Drink", value: "Hot Drink" },
];

const MenuNew = ({ orderNewItem, onSetTableNumber }) => {
  const [data, setData] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState(data);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Quantity of food item the customer wants to order
  const [orderQuantity, setOrderQuantity] = useState({});

  const [openModal, setOpenModal] = useState(true);
  const [tableNumber, setTableNumber] = useState("");

  // Fetches menu data from api and sets it in json format
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Fetches menu data from api and sets it in json format
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Filter menu item
  const filterMenu = (filterType) => {
    if (filterType === "All") {
        // Filter the data to include only available items
        let filteredFood = data.filter(item => item.available === true);
        setFilteredMenu(filteredFood);
    } else {
        // Filter the data based on category and availability
        let filteredFood = data.filter(item => 
            item.menugroup.category === filterType && item.available === true
        );
        setFilteredMenu(filteredFood);
    }
}


  const increaseQuantity = (quant) => {
    setOrderQuantity((prevState) => ({
      //prev state is the previous state iof ordeQuantity
      ...prevState,
      [quant]: (prevState[quant] || 0) + 1, //updating the quantity associated with the item identified by quant.
      //If quant already exists in the previous state (prevState), we increment its value by 1.
      //If quant doesn't exist (i.e., it's the first time we're adding this item), we default its value to 0 and then increment it by 1.
    }));
  };

  const decreaseQuantity = (quant) => {
    setOrderQuantity((prevState) => ({
      ...prevState,
      [quant]: Math.max((prevState[quant] || 1) - 1, 0),
    }));
  };

  const openModalForItem = (itemId) => {
    setSelectedItemId(itemId);
  };

  const closeModal = () => {
    setSelectedItemId(null);
    setOrderQuantity({});
  };

  const handleOrder = (item) => {
    let quantity = orderQuantity[item.id];
    {
      quantity > 0
        ? orderNewItem({
            name: item.name,
            calorie: item.calorie,
            price: item.price,
            quantity: quantity,
            tableNumber: tableNumber,
          })
        : (quantity = 0);
    }
  };

  const handleTableNumber = (e) => {
    const newTableNumber = e.target.value;
    if (newTableNumber > 0 && newTableNumber <= 20) {
      setTableNumber(e.target.value);
      updateTableNum(e.target.value);
    } else {
      // Handle invalid input (for example, display an error message)
      alert("Please enter a table number between 1 and 20");
    }
  };

  const updateTableNum = (tableNum) => {
    onSetTableNumber(tableNum);
  };

  return (
    <div className="Menu relative overflow-x-auto">
      <>
        {/* Modal for Table Number */}
        <Modal
          show={openModal}
          size="lg"
          onClose={() => setOpenModal(false)}
          popup
        >
          <div
            class="bg-cover w-full h-full"
            style={{
              backgroundImage: "url('/images/CustomerLoginBackground.png')",
            }}
          >
            <Modal.Header />

            <Modal.Body>
              <div className="text-center">
                <p className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                  Enter The Table Number
                </p>

                <div className="mb-5 ">
                  <b>
                    <input
                      type="number"
                      onChange={(e) => {
                        handleTableNumber(e);
                      }}
                      id="tableNumber"
                      name="tableNumber"
                      min="1"
                      max="20"
                      className="overflow-hidden text-xl text-dark font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5 focus:ring-4 focus:ring-amber"
                      placeholder="Table Number"
                      required
                    />
                  </b>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="bg-lemon text-black font-sans font-bold py-2 px-4 my-2 rounded-lg  hover:bg-cherry hover:text-lemon"
                    onClick={() => setOpenModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </>

      {filterButtons.map((item, index) => (
        <button
          className="bg-redder text-black text-3xl  font-sans font-bold py-5 px-5 my-2 mx-1 space-x-4 rounded-lg hover:bg-amber hover:text-lemon"
          key={index}
          value={item.name}
          onClick={() => filterMenu(item.name)}
        >
          {item.name}
        </button>
      ))}

      <table border={1} className="w-full text-xl text-left rtl:text-right">
        <thead>
          <tr className="bg-amber text-3xl text-sans">
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price(£)
            </th>
            <th scope="col" className="px-6 py-3">
              Calorie(cal)
            </th>
            <th scope="col" className="px-6 py-3">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render each item */}
          {filteredMenu.map((item) => (
            <tr
              key={item.id}
              className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.price.toFixed(2)}</td>
              <td className="px-6 py-4">{item.calorie}</td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-amber hover:text-yellow-200"
                  onClick={() => {
                    openModalForItem(filteredMenu.indexOf(item));
                  }}
                >
                  Add to order
                </button>
                {selectedItemId !== null && (
                  <ModalNew
                    item={filteredMenu[selectedItemId]}
                    openModal={true}
                    setOpenModal={closeModal}
                    decreaseQuantity={decreaseQuantity}
                    orderQuantity={orderQuantity}
                    increaseQuantity={increaseQuantity}
                    handleOrder={handleOrder}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MenuNew;
