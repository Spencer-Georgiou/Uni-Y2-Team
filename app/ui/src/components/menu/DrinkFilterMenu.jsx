//the combination of filter and starters
//combine them is because they need a same state to control the content, will solve it later

import { Fragment, useState } from "react";

const drinkMenu = [
  { name: "Corona Extra", description: "light, refreshing with wedge of lime", calorie: 300, price: 3, menugroup: "Beer", image_path: "corona-extra.jpg" },
  { name: "Modelo Especial", description: "balanced flavour profile, and smooth, crisp finish", calorie: 150, price: 2, menugroup: "Beer", image_path: "modelo-especial.jpg" },
  { name: "Pacifico", description: "crisp taste with a touch of malt sweetness", calorie: 150, price: 2.3, menugroup: "Beer", image_path: "pacifico.jpg" },
  {
    name: "Dos Equis", description: "smooth flavour with hints of toasted malt",
    calorie: 180, price: 3,
    menugroup: "beer", image_path: "dos-equis.jpg"
  },
  {
    name: "Margarita",
    description: "classic cocktail featuring tequila, lime juice, and orange liqueur served over ice and often rimmed with salt",
    calorie: 290, price: 8, menugroup: "cocktail",
    image_path: "margarita.jpg"
  },
  {
    name: "Paloma",
    description: "refreshing Mexican cocktail made with tequila, grapefruit soda, lime juice, and a pinch of salt, served over ice",
    calorie: 250, price: 9, menugroup: "cocktail",
    image_path: "paloma.jpg"
  },
  {
    name: "Michelada",
    description: "spicy and savory Mexican beer cocktail made with beer, lime juice, assorted sauces, spices, and chili peppers, served over ice with a salted rim",
    calorie: 140, price: 11, menugroup: "cocktail",
    image_path: "michelada.jpg"
  },
  {
    name: "Tequila Sunrise",
    description: "made with tequila, orange juice, and grenadine, creating a gradient of colors resembling a sunrise",
    calorie: 300, price: 8, menugroup: "cocktail",
    image_path: "tequila-sunrise.jpg"
  },
  {
    name: "Mexican Mule",
    description: "variation of the classic Moscow Mule cocktail, made with tequila, lime juice, and ginger beer, served over ice with a wedge of lime",
    calorie: 240, price: 10, menugroup: "cocktail",
    image_path: "mexican-mule.jpg"
  },
  {
    name: "Mexican Hot Chocolate",
    description: "hot chocolate spiced with cinnamon and chili", calorie: 300,
    price: 4.5, menugroup: "hot_drink",
    image_path: "mexican-hot-chocolate.jpg"
  },
  {
    name: "Cafe de Olla",
    description: "coffee brewed with cinnamon and piloncillo- unrefined cane sugar",
    calorie: 180, price: 3, menugroup: "hot_drink",
    image_path: "cafe-de-olla.jpg"
  },
  {
    name: "Atole",
    description: "comforting beverage made from masa harina (corn flour), water or milk, sweeteners, and spices",
    calorie: 130, price: 2.5, menugroup: "hot_drink",
    image_path: "attole.jpg"
  },
  {
    name: "Agua de Jamaica", description: "tangy and sweet hibiscus flower tea",
    calorie: 90, price: 1.2,
    menugroup: "hot_drink",
    image_path: "agua-de-jamaica.jpg"
  },
]


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
      <b className="ml-20 text-lg my-2">
        This menu will display all drinks for reference only, subject to
        availability.
      </b>
      <p className="ml-20">
        If the menu item isn't display, click on the blue block
      </p>

      <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7 my-3">
        <div

          class="w-10/12 h-[450px] bg-ocean ml-24 overflow-x-auto round-xl border border-2 "
        >
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
                {drinkMenu.map((item) => (
                  <Fragment>
                    <tr class="bg-ocean">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>{item.name}</b>
                        <p class="text-gray-900">
                          <p>{item.description}</p>
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">{item.calorie}</td>
                      <td class="px-6 py-4 text-gray-900">
                        {item.menugroup}
                      </td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡{item.price}</b>
                      </td>
                    </tr>
                    <br></br>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkFilterMenu;
