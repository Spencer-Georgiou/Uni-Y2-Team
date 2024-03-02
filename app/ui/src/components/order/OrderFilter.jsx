import { useState } from "react";

const OrderFilter = () => {
  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out

    vegan: true,
    vegetarian: true,
    spicy: true,
    nonspicy: true,
    gluten: true,
    dairy: true,
    nuts: true,
    eggs: true,
    mollusks: true,
    alcohol: true,
  });

  // the function to set the state to control menu display
  function handleAllergy(e) {
    //get the name and valu of the element
    let { value } = e.target;

    //temporary test
    //if the checkbox of nonspicy is selected, the spicy food won't display
    const { checked } = e.target;
    if (checked) {
      setAllergy({
        ...allergy,
        [value]: false,
      });
    } else {
      setAllergy({
        ...allergy,
        [value]: true,
      });
    }
  }

  return (
    <div class="m-2 p-3">
      <h3 class="my-2 text-xl text-cherry">
        <b>Dietary Filter</b>
      </h3>
      <ul class="items-center w-full text-sm text-lemon bg-cherry border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="vegetarian"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Vegetarin</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="vegan"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Vegan</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="spicy"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Spicy</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="nonspicy"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Non-Spicy</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="gluten"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Gluten</b>
            </label>
          </div>
        </li>
      </ul>
      <ul class="items-center w-full text-sm text-lemon bg-cherry border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="dairy"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Dairy</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="nuts"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Nuts</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="eggs"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Eggs</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="mollusks"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Mollusks</b>
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="alcohol"
              class="w-4 h-4 text-lemon border-gray-300 rounded "
            />
            <label
              for="vue-checkbox-list"
              class="w-full py-3 ms-2 text-sm font-medium text-lemon"
            >
              <b>Alcohol</b>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderFilter;
