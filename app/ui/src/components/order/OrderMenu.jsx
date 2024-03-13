import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal } from "flowbite-react";
import { addToCart } from "./redux/cartSlice";
import { useDispatch } from "react-redux";

const filterButtons = [
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

const OrderMenu = () => {
  const dispatch = useDispatch();
  const [food, setFood] = useState({
    name: "",
    description: "",
    allergens: "",
    calorie: "",
    price: "",
    image_path: "",
  });
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoding] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [previous, setPrevious] = useState([]);

  // Fetches menu data from api and sets it in json format
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function hanldeMenu(e) {
    //set loading state
    setLoding(true);

    //add the available items to filtered
    const temp = data.filter((f) => f.available === true);
    setFiltered(temp);
    //to display specfic category
    handleType();
    if (menu.length === 0) {
      console.log("loading false");
    }

    setLoding(false);
  }

  function handleType() {
    if (currentType === "Drink") {
      // Otherwise, it will filter the data (data.filter) checking if the filterType argument is the same as the item (from api data) category
      let filterfood = filtered.filter(
        (item) => item.menugroup.type === "Drink"
      );
      setMenu(filterfood);
    } else {
      let filterfood = filtered.filter(
        (item) => item.menugroup.category === currentType
      );
      setMenu(filterfood);
    }
    console.log("loading" + currentType);
  }

  //the state of allery list
  const allergy = ["Gluten", "Dairy", "Nuts", "Egg", "Mollusk"];
  // the function to set the state to control menu display
  function handleAllergy(e) {
    //get the name and value of the element
    let { value } = e.target;
    setPrevious(menu);

    const { checked } = e.target;
    if (checked) {
      if (value === "Gluten") {
        let a = menu.filter(
          (f) =>
            f.name !== "Tacos" &&
            f.name !== "Bean Tostadas" &&
            f.name !== "Corona"
        );
        setMenu(a);
      }
      if (value === "Dairy") {
        let b = menu.filter(
          (f) => f.name !== "Tacos" && f.name !== "Fanta Naranja"
        );
        setMenu(b);
      }
    } else {
      setMenu(previous);
    }
  }

  function handleFood(item) {
    setFood({
      name: item.name,
      description: item.description,
      allergens: item.allergens,
      calorie: item.calorie,
      price: item.price,
      image_path: item.image_path,
    });
  }

  return (
    <div>
      <div class="m-2 p-3">
        <h3 class="my-2 text-xl text-cherry">
          <b>Dietary Filter</b>
        </h3>
        <ul class="items-center w-full text-sm text-lemon bg-cherry border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {Object.keys(allergy).map((al) => (
            <li
              class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              key={allergy[al]}
            >
              <div class="flex items-center ps-3">
                <input
                  onChange={handleAllergy}
                  id="checkbox-list"
                  type="checkbox"
                  value={allergy[al]}
                  class="w-4 h-4 text-lemon border-gray-300 rounded "
                />
                <label
                  for="checkbox-list"
                  class="w-full py-3 ms-2 text-sm font-medium text-lemon"
                >
                  <b>{allergy[al]}</b>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ul class="ml-24 my-4 flex flex-wrap text-lg font-medium text-center">
        <li class="me-2">
          <button
            onClick={() => {
              setLoding(true);
              setCurrentType("All");
              const temp = data.filter((f) => f.available === true);
              setMenu(temp);
              setLoding(false);
            }}
            value="All"
            type="button"
            href="#"
            class="bg-amber inline-block px-5 py-3 rounded-lg hover:text-amber hover:bg-gray-100 text-lemon"
          >
            <b>All</b>
          </button>
        </li>
        {filterButtons.map((m, index) => (
          <li class="me-2" key={index}>
            <button
              onClick={(e) => {
                setCurrentType(e.target.value);
                hanldeMenu(e);
              }}
              value={m.value}
              type="button"
              href="#"
              class="bg-amber inline-block px-5 py-3 rounded-lg hover:text-amber hover:bg-gray-100 text-lemon"
            >
              <b>{m.name}</b>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        size="4xl"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Fragment>
          <Modal.Header>
            <b>{food.name}</b>
          </Modal.Header>
          <Modal.Body>
            <div class="flex flex-wrap justify-start">
              <div>
                <img
                  src={food.image_path}
                  alt="picture"
                  className="ml-5 mr-[100px]"
                />
              </div>
              <div>
                <p className="text-xl">{food.description}</p>
                <p className="text-black text-sans text-base">
                  {food.calorie} calories
                </p>

                {food.allergens &&
                  food.allergens.map((food) => (
                    <p key={food.id} className="text-base m-0">
                      Allergen: {food.name}
                    </p>
                  ))}
              </div>
            </div>
          </Modal.Body>
        </Fragment>
        <Modal.Footer>
          <button
            onClick={() => {
              //calling the addToCart action creator in the dispatch function from useDispatch
              dispatch(
                addToCart({
                  name: food.name,
                  description: food.description,
                  price: food.price,
                })
              );
              setOpenModal(false);
            }}
            type="button"
            className="bg-lemon font-sans font-bold py-2 px-4 my-2 rounded-lg  hover:text-white hover:bg-amber"
          >
            Add to order
          </button>
          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className="bg-lemon font-sans font-bold py-2 px-4 my-2 rounded-lg hover:text-white hover:bg-amber"
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

      <div className="mx-24 rounded-2xl bg-amber w-[780px] h-[530px] overflow-x-auto p-2">
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
            {!loading && menu.length > 0 ? (
              menu.map((item) => (
                <tr
                  key={item.id}
                  className="bg-amber border-b border-lemon dark:bg-gray-800 dark:border-gray-700"
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
                      onClick={() => {
                        handleFood(item);
                        setOpenModal(true);
                      }}
                      type="button"
                      class="text-white bg-lemon hover:bg-cherry focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center me-2  hover:text-white hover:bg-amber"
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
            ) : (
              <p className="ml-6 text-xl ">
                loading...try again or refresh the webpage
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderMenu;
