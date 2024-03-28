import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal } from "flowbite-react";
import { addToCart, removeAllItem } from "./redux/cartSlice";
import { useDispatch } from "react-redux";

// this is the menu button with different type
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

// this is the menu component
const OrderMenu = () => {
  // dispatch redux function
  const dispatch = useDispatch();
  // this state is to store modal food details when hitting the 'Add' button
  const [food, setFood] = useState({
    name: "",
    description: "",
    allergens: "",
    calorie: "",
    price: "",
    image_path: "",
  });
  //to store the completed item data
  const [data, setData] = useState([]);
  //the data of the menu item to be displayed
  const [menu, setMenu] = useState([]);
  //control the open and close of the modal
  const [openModal, setOpenModal] = useState(false);
  //to store the filtered menu item
  const [filtered, setFiltered] = useState([]);
  //the preious data before allergens filtered
  const [previous, setPrevious] = useState([]);

  //the state to know which category filter button is currently pressed
  const [activeButton, setActiveButton] = useState(null);

  //the first item user open the order page, Fetches menu data from api and sets it to data
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setData(json));
    dispatch(removeAllItem());
  }, []);

  //this function is to control the display of menu item
  function hanldeMenu(name) {
    setActiveButton(name);
    //only add the available items to filtered state
    const temp = data.filter((f) => f.available === true);
    setFiltered(temp);
    //to display specfic category
    handleType(name);
    //to check if menu item is empty
    if (menu.length === 0) {
      console.log("loading false");
    }
  }

  //This function is to control the dispkay of pointed category
  function handleType(name) {
    if (name === "All") {
      setMenu(filtered);
    } else {
      let filterfood = filtered.filter(
        (item) => item.menugroup.category === name
      );
      setMenu(filterfood);
    }
    console.log("loading" + name);
  }

  //the state of allery list
  const allergy = ["Gluten", "Dairy", "Nuts", "Egg", "Mollusc"];
  // the function to set the state to control menu display
  function handleAllergy(e) {
    //get the allergen name
    let { value } = e.target;
    setPrevious(menu);

    const { checked } = e.target;
    //if hitting the checkbox
    if (checked) {
      //to filter gluten food
      if (value === "Gluten") {
        let a = menu.filter(
          (f) =>
            f.name !== "Tacos" &&
            f.name !== "Bean Tostadas" &&
            f.name !== "Corona"
        );
        setMenu(a);
      }
      //to filter dairy food
      if (value === "Dairy") {
        let b = menu.filter(
          (f) => f.name !== "Tacos" && f.name !== "Fanta Naranja"
        );
        setMenu(b);
      }
      //if release the allergy checkbox, set the menu item back
    } else {
      setMenu(previous);
    }
  }

  //this function is to set the display of food details
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
      {/* allergens filterButtons */}
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
      {/* Menu buttons*/}
      <ul class="ml-20 my-4 flex flex-wrap text-lg font-medium text-center">
        {filterButtons.map((m, index) => (
          
          <li class={`bg-${activeButton === m.name ? 'gray-100' : 'amber'} text-${activeButton === m.name ? 'amber' : 'lemon'} my-1 mx-1 font-sans font-bold py-3 px-5 rounded-lg hover:bg-gray-100 hover:text-amber`} key={index}>
            <button
              onClick={() => {
                hanldeMenu(m.name);
              }}
              value={m.value}
              type="button"
              href="#"
            >
              <b>{m.name}</b>
            </button>
          </li>
        ))}
      </ul>

      {/* Display modal of food details after hitting on Add button */}
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
            <div>
              <div className="float-left">
                <img
                  src={food.image_path}
                  alt="picture"
                  className="ml-5 mr-5 w-[220px] h-[150px]"
                />
              </div>
              <div>
                <p className="text-xl">{food.description}</p>
                <p className="mt-3">{food.calorie} calories</p>
                <p className="mt-3">
                  <b>Price: ￡{food.price} each</b>
                </p>
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

      {/* Menu */}
      <div className="mx-20 rounded-2xl bg-amber w-10/12 h-[500px] overflow-x-auto p-2">
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
                Price
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {menu.length > 0 ? (
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
              <p className="ml-6 text-xl ">please click on the menu buttons</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderMenu;
