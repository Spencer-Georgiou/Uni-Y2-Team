//the combination of filter and starters
//combine them is because they need a same state to control the content, will solve it later

import { useState } from "react";

const FilterStarters = () => {
  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    nonspicy: true,
  });

  // the function to set the state to control menu display
  function handleAllergy(e) {
    //get the name and valu of the element
    let { value, name } = e.target;

    //temporary test
    //if the checkbox of nonspicy is selected, the spicy food won't display
    const { checked } = e.target;
    if (checked) {
      setAllergy({
        nonspicy: false,
      });
    } else {
      setAllergy({
        nonspicy: true,
      });
    }
  }

  return (
    <div>
      <div class="bg-cherry w-full h-96 border-gray-200 p-4 pl-48">
        <div class="flex flex-wrap justify-between mx-auto">
          <div class="my-2.5 p-1 w-full">
            <span class="text-lemon line-height:1.25rem text-2xl ">
              <b>Dietary Filter</b>
            </span>
          </div>
          <div class="bg-lemon w-5/6 height h-72 rounded-2xl pt-5 px-20">
            <div class="pl-2 text-cherry w-1/2 inline float-left">
              <span class="text-xl">
                <b>Show Me:</b>
              </span>
              <div class="flex items-center my-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
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
                  value=""
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
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Halal</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
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
                  value="nonspicy"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  // once the checkbox is changed, run the function
                  onChange={handleAllergy}
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                  name="nonspicy"
                >
                  <b>Non-Spicy</b>
                </label>
              </div>
            </div>
            <div class="pl-2 text-cherry w-56 inline float-left">
              <span class="text-xl">
                <b>Does Not Contain:</b>
              </span>
              <div class="flex items-center my-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
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
                  value=""
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
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Nuts</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Eggs</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Mollusks</b>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lemon border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
          <img
            src="/menu/starters.png"
            alt="picture"
            class="w-1/2 h-20 ml-80 mt-7"
          />
          <div class="w-10/12 h-90 bg-juice ml-24">
            <div class="relative overflow-x-auto">
              <table class="w-full text-lg text-left text-lemon">
                <thead class="text-xl text-lemon uppercase bg-juice">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Calories
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-juice">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Taco</b>
                      <p class="text-gray-900">
                        Crispy tacos filled with cheese
                      </p>
                      <p class="text-gray-900 ml-3">
                        • Plant Beef with Black Pepper Sauce (Vg)
                      </p>
                      {/* if the state nonspicy if true, display this dishes. otherwise, it will be hided */}
                      {allergy.nonspicy && (
                        <p class="text-gray-900 ml-3"> • Bean chilli</p>
                      )}
                    </th>
                    <td class="px-6 py-4 text-gray-900">600 kcal</td>
                    <td class="px-6 py-4 text-gray-900">Spicy, Vegan</td>
                    <td class="px-6 py-4 text-gray-900">
                      <b>￡5.00</b>
                    </td>
                  </tr>
                  <tr class="bg-juice">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Jalapeno Poppers</b>
                      <p class="text-gray-900">With cream cheese(Vg)</p>
                    </th>
                    <td class="px-6 py-4 text-gray-900">450 kcal</td>
                    <td class="px-6 py-4 text-gray-900">Vegan</td>
                    <td class="px-6 py-4 text-gray-900">
                      <b>￡3.50</b>
                    </td>
                  </tr>
                  <tr class="bg-juice">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Patatas Bravas</b>
                      <p class="text-gray-900">
                        Roasted potatoes in tomato dressing(V)
                      </p>
                    </th>
                    <td class="px-6 py-4 text-gray-900">500 kcal</td>
                    <td class="px-6 py-4 text-gray-900">Vegetarian</td>
                    <td class="px-6 py-4 text-gray-900">
                      <b>￡3.00</b>
                    </td>
                  </tr>
                  <tr class="bg-juice">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Crispy Cauliflower Bites</b>
                      <p class="text-gray-900">
                        Roasted cauliflower in jalapeno dressing(V)
                      </p>
                    </th>
                    <td class="px-6 py-4 text-gray-900">200 kcal</td>
                    <td class="px-6 py-4 text-gray-900">Vegetarian</td>
                    <td class="px-6 py-4 text-gray-900">
                      <b>￡2.50</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterStarters;
