//the combination of filter and starters
//combine them is because they need a same state to control the content, will solve it later

import { useState, useEffect } from "react";

const FilterMenu = () => {
  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    spicy: true,
    mollusk: true,
    egg: true,
    vegetarian: true,
    gluten: true,
    dairy: true,
    nuts: true,
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
      <div class="bg-cherry w-full h-80 border-gray-200 p-4 pl-48">
        <div class="flex flex-wrap justify-between mx-auto">
          <div class="my-2.5 p-1 w-full">
            <span class="text-lemon line-height:1.25rem text-2xl ">
              <b>Dietary Filter</b>
            </span>
          </div>
          <div class="bg-lemon w-5/6 h-52 rounded-2xl pt-5 px-20">
            <div class="pl-2 text-cherry w-1/2 inline float-left">
              <span class="text-xl">
                <b>Does Not Contain:</b>
              </span>

              <div class="flex items-center my-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="mollusk"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Mollusk</b>
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
                  value="egg"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  // once the checkbox is changed, run the function
                  onChange={handleAllergy}
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Egg</b>
                </label>
              </div>
            </div>
            <div class="pl-2 text-cherry w-56 inline float-left">
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
                  value="nuts"
                  onChange={handleAllergy}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-checkbox"
                  class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"
                >
                  <b>Nuts</b>
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
            class="w-1/2 h-20 ml-80 mt-4"
          />
          <div class="w-10/12 h-90 bg-amber ml-24 rounded-xl p-3">
            <div class="relative overflow-x-auto  rounded-xl">
              <table class="w-full text-lg text-left text-lemon">
                <thead class="text-xl text-lemon uppercase bg-amber">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Calories
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Allergens
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allergy.gluten && allergy.dairy && (
                    <tr class="bg-amber">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Taco</b>
                        <p class="text-gray-900">
                          Crispy tacos filled with cheese
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">600 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Gluten, Dairy</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡5.00</b>
                      </td>
                    </tr>
                  )}
                  {allergy.nuts && allergy.egg && (
                    <tr class="bg-amber ">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Patatas Bravas</b>

                        <p class="text-gray-900">
                          Roasted potatoes in tomato dressing
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">500 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Nuts, Egg</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡3.00</b>
                      </td>
                    </tr>
                  )}
                  <tr class="bg-amber my-2">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Crispy Cauliflower Bites</b>

                      <p class="text-gray-900">
                        Roasted cauliflower in jalapeno dressing
                      </p>
                    </th>
                    <td class="px-6 py-4 text-gray-900">200 kcal</td>
                    <td class="px-6 py-4 text-gray-900">-------</td>
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
      <div class="bg-lemon">
        <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
          <img
            src="/menu/mains.png"
            alt="picture"
            class="w-1/2 h-20 ml-80 mt-7"
          />
          <div class="w-10/12 h-90 bg-cherry ml-24  rounded-xl p-3">
            <div class="relative overflow-x-auto  rounded-xl">
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
                      Allergens
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allergy.mollusk && (
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Burrito</b>

                        <p class="text-gray-900">
                          Rice, beans and cheese wrapped up in a flour tortilla
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">350 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Mollusk</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡6.00</b>
                      </td>
                    </tr>
                  )}
                  <tr class="bg-cherry">
                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                      <b>Chorizo Quesadilla</b>
                      <p class="text-gray-900">
                        Chorizo and cheese toasted in a flour tortilla
                      </p>
                    </th>
                    <td class="px-6 py-4 text-gray-900">400 kcal</td>
                    <td class="px-6 py-4 text-gray-900">------</td>
                    <td class="px-6 py-4 text-gray-900">
                      <b>￡7.50</b>
                    </td>
                  </tr>
                  {allergy.gluten && (
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Bean Tostadas</b>

                        <p class="text-gray-900">
                          chickpeas, beans and peas with tomato salsa(V)
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">300 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Gluten</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡6.00</b>
                      </td>
                    </tr>
                  )}
                  {allergy.nuts && (
                    <tr class="bg-cherry">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>Halloumi Skewers</b>

                        <p class="text-gray-900">
                          Roasted Halloumi cheese and vegetables(Vg)
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">500 kcal</td>
                      <td class="px-6 py-4 text-gray-900">Nuts</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡5.50</b>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-lemon border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
          {/* the title image */}
          <img
            src="/menu/desserts.png"
            alt="picture"
            class="w-1/2 h-20 ml-80 mt-7"
          />
          {/* the menu block */}
          <div class="w-10/12 h-90 bg-amber ml-24 rounded-xl p-3">
            {/* the menu table */}
            <table class="w-full text-lg text-left text-lemon">
              <thead class="text-xl text-lemon uppercase bg-amber">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Calories
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Allergens
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-amber">
                  <th scope="row" class="px-6 h-5 font-medium text-lemon">
                    <b> Churros</b>

                    <p class="text-gray-900">
                      Fried churros with a chocolate filling
                    </p>
                  </th>
                  <td class="px-6 py-4 text-gray-900">500 kcal</td>
                  <td class="px-6 py-4 text-gray-900">--------</td>
                  <td class="px-6 py-4 text-gray-900">
                    <b>￡4.00</b>
                  </td>
                </tr>
                <tr class="bg-amber">
                  <th scope="row" class="px-6 h-5 font-medium text-lemon">
                    <b>Sweet Fried Plantains</b>

                    <p class="text-gray-900">Sugar coated fried plantains</p>
                  </th>
                  <td class="px-6 py-4 text-gray-900">300 kcal</td>
                  <td class="px-6 py-4 text-gray-900">-------</td>
                  <td class="px-6 py-4 text-gray-900">
                    <b>￡3.00</b>
                  </td>
                </tr>

                <tr class="bg-amber">
                  <th scope="row" class="px-6 h-5 font-medium text-lemon">
                    <b>Ice cream</b>

                    <p class="text-gray-900">2 scoops of vanilla ice cream</p>
                  </th>

                  <td class="px-6 py-4 text-gray-900">300 kcal</td>
                  <td class="px-6 py-4 text-gray-900">--------</td>
                  <td class="px-6 py-4 text-gray-900">
                    <b>￡2.50</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ml-20 text-lg my-1">
            This menu will display all foods for reference only, subject to
            availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
