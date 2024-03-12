import { useEffect, useState } from "react";

const OrderFilter = ({ setGluten, setDairy }) => {
  //the state of allery list
  const allergy = ["Gluten", "Dairy", "Nuts", "Egg", "Mollusk"];
  // the function to set the state to control menu display
  function handleAllergy(e) {
    //get the name and value of the element
    let { value } = e.target;

    const { checked } = e.target;
    if (checked) {
      if (value === "Gluten") {
        setGluten(false);
      }
      if (value === "Dairy") {
        setDairy(false);
      }
    } else {
      if (value === "Gluten") {
        setGluten(true);
      }
      if (value === "Dairy") {
        setDairy(true);
      }
    }
  }

  return (
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
  );
};

export default OrderFilter;
