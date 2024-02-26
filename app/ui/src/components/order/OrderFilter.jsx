import { useState } from "react";

const OrderFilter = () => {
  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    spicy: true,
    vegan: true,
    alcohol: true,
    vegetarian: true,
    gluten: true,
    dairy: true,
    nonAlcohol: true,
    fried: true,
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
    <div>
      <div class="bg-lemon w-full h-96 border-gray-200 p-4 pl-48">
        <div class="flex flex-wrap justify-between mx-auto">
          <div class="my-2.5 p-1 w-full">
            <span class="text-cherry line-height:1.25rem text-2xl ">
              <b>Dietary Filter</b>
            </span>
          </div>
          <div class="bg-cherry w-5/6 h-64 rounded-2xl pt-5 px-20">
            <div class="pl-2 text-lemon w-1/2 inline float-left">
              <span class="text-xl">
                <b>Does Not Contain:</b>
              </span>
              <div class="flex items-center my-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="vegetarian"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Vegetarian</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="vegan"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Vegan</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="spicy"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Spicy</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="alcohol"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  // once the checkbox is changed, run the function
                  onChange={handleAllergy}
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>alcohol</b>
                </label>
              </div>
            </div>
            <div class="pl-2 text-lemon w-56 inline float-left">
              <div class="flex items-center my-5 mt-11">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="gluten"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Gluten</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="dairy"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Dairy</b>
                </label>
              </div>

              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="fried"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Fried</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="nonAlcohol"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Non-alcohol</b>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFilter;
