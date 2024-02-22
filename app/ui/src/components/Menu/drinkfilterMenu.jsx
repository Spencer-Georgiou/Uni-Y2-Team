//the combination of filter and starters
//combine them is because they need a same state to control the content, will solve it later

import { Fragment, useState } from "react";

const DrinkFilterMenu = () => {
  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    fruit: true,
    nonAlcoholic: true,
    alcoholic: true,
    gluten: true,
    dairy: true,
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
      <div class="bg-cherry w-full h-96 border-gray-200 p-4 pl-48">
        <div class="flex flex-wrap justify-between mx-auto">
          <div class="my-2.5 p-1 w-full">
            <span class="text-lemon line-height:1.25rem text-2xl ">
              <b>Dietary Filter</b>
            </span>
          </div>
          <div class="bg-lemon w-5/6 h-64 rounded-2xl pt-5 px-20">
            <div class="pl-2 text-cherry w-1/2 inline float-left">
              <span class="text-xl">
                <b>Does Not Contain:</b>
              </span>
              <div class="flex items-center my-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="fruit"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Fruit</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="alcoholic"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Alcoholic</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="nonAlcoholic"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Non-Alcoholic</b>
                </label>
              </div>
              <div class="flex items-center mb-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="gluten"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  // once the checkbox is changed, run the function
                  onChange={handleAllergy}
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Gluten</b>
                </label>
              </div>
            </div>
            <div class="pl-2 text-cherry w-56 inline float-left">
              <div class="flex items-center my-5 mt-11">
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
            </div>
          </div>
        </div>
      </div>
      {allergy.nonAlcoholic && (
        <div class="bg-lemon border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
            <img
              src="/menu/nonAlcoholic.png"
              alt="picture"
              class="w-1/2 h-16 ml-80 mt-7"
            />
            <div class="w-10/12 h-90 bg-ocean ml-24">
              <div class="relative overflow-x-auto">
                <table class="w-full text-lg text-left text-lemon">
                  <thead class="text-xl text-lemon uppercase bg-ocean">
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
                    <tr class="bg-ocean">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Peach iced tea</b>
                        <p class="text-gray-900">
                          {allergy.fruit && <p>Homemade with fresh peaches</p>}
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">150 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Fruit</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡3.00</b>
                      </td>
                    </tr>
                    <tr class="bg-ocean">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Fanta Naranja</b>
                        {allergy.fruit && (
                          <p class="text-gray-900">Orange Fanta</p>
                        )}
                      </th>
                      <td class="px-6 py-4 text-gray-900">6 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Fruit</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡2.00</b>
                      </td>
                    </tr>
                    <tr class="bg-ocean">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Hot chocolate</b>

                        <p class="text-gray-900">
                          Thick hot chocolate served with a galleta
                        </p>
                        {allergy.dairy && (
                          <Fragment>
                            <p class="text-gray-900">• with cream</p>
                            <p class="text-gray-900">• with milk</p>
                          </Fragment>
                        )}
                        <p class="text-gray-900">• with oreo cookie crumbs</p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">250 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Dairy</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡3.00</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {allergy.alcoholic && (
        <div class="bg-lemon border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
            <img
              src="/menu/alcoholic.png"
              alt="picture"
              class="w-1/2 h-16 ml-80 mt-7"
            />
            <div class="w-10/12 h-90 bg-cherry ml-24">
              <div class="relative overflow-x-auto">
                <table class="w-full text-lg text-left text-lemon">
                  <thead class="text-xl text-lemon uppercase bg-cherry">
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
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Tequila Blanco</b>

                        <p class="text-gray-900">Blue agave</p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">450 kcal</td>
                      <td class="px-6 py-4 text-gray-900"> ------ </td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡4.00</b>
                      </td>
                    </tr>
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Corona</b>
                        {allergy.gluten && <p class="text-gray-900">Beer</p>}
                      </th>
                      <td class="px-6 py-4 text-gray-900">300 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Gluten</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡3.00</b>
                      </td>
                    </tr>
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Pina Colada</b>
                        {allergy.fruit && (
                          <Fragment>
                            <p class="text-gray-900">Pineapple cocktail</p>
                            <p class="text-gray-900">Lemon cocktail</p>
                          </Fragment>
                        )}
                      </th>
                      <td class="px-6 py-4 text-gray-900">400 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Fruit</td>
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
      )}
    </div>
  );
};

export default DrinkFilterMenu;
