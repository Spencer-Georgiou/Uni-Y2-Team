import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

const filterButtons = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Starter",
    value: "Starter",
  },
  {
    name: "Main",
    value: "Main",
  },
  {
    name: "Dessert",
    value: "Dessert",
  },
  {
    name: "Drink",
    value: "Drink",
  },
];

const OrderTab = () => {
  const [order, setOrer] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [data, setData] = useState([]);
  const [menu, setMenu] = useState(data);
  const [loading, setLoding] = useState(false);
  // Fetches menu data from api and sets it in json format
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function hanldeMenu(e) {
    let filterType = e.target.value;
    if (filterType === "All") {
      setLoding(true);
      //If waiter wants to display the entire menu, it will set the
      setMenu(data); // filtered menu state as just the entire data
      setLoding(false);
      console.log("loading all");
    } else {
      setLoding(true);
      // Otherwise, it will filter the data (data.filter) checking if the filterType argument is the same as the item (from api data) category
      let food = data.filter((item) => item.menugroup.category === filterType);
      setMenu(food);
      setLoding(false);
      console.log("loading" + filterType);
    }
  }

  return (
    <div>
      <ul class="ml-24 my-4 flex flex-wrap text-lg font-medium text-center">
        {filterButtons.map((m, index) => (
          <li class="me-2" key={index}>
            <button
              onClick={hanldeMenu}
              value={m.name}
              type="button"
              href="#"
              class="bg-amber inline-block px-5 py-3 rounded-lg hover:text-cherry hover:bg-gray-100 text-lemon"
            >
              <b>{m.name}</b>
            </button>
          </li>
        ))}
      </ul>

      <div className=" mx-24 rounded-2xl bg-amber w-[780px] h-[530px] overflow-x-auto p-2">
        <table className="w-full h-full text-lg text-left rtl:text-right">
          <thead>
            <tr className="bg-amber text-xl text-sans">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Calorie
              </th>
              <th scope="col" className="px-6 py-3">
                Categorye
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <p className="ml-6">loading...</p>
            ) : (
              menu.map((item) => (
                <tr
                  key={item.id}
                  className="bg-amber border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-4">
                    <p className="text-lemon text-lg mb-2">
                      <b>{item.name}</b>
                    </p>
                    <p className="text-dark">{item.description}</p>
                  </td>
                  <td className="px-5 py-4">{item.calorie} kcl</td>

                  <td className="px-5 py-4">{item.menugroup.category} </td>
                  <td className="px-4 py-4">
                    <p>￡{item.price}</p>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="text-white bg-lemon hover:bg-cherry focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center me-2 "
                    >
                      <svg
                        class="w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21"
                      >
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      Add
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTab;
