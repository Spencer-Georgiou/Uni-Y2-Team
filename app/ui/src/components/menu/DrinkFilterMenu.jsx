//the combination of filter and starters
//combine them is because they need a same state to control the content, will solve it later

import { Fragment, useState } from "react";

//the menu items of cocktail
const cocktail = [
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
]

//the menu item of soft drink
const softDrink = [
  {
    name: "Jarritos",
    description: "fruit flavoured soda- available in lime, pineapple, and mandarin",
    calorie: 200, price: 2, menugroup: "soft_drink"
  },
  {
    name: "Peach Iced Tea", description: "Homemade with fresh Peaches", calorie: 150,
    price: 3,
    menugroup: "soft_drink"
  },
  {
    name: "Horchata",
    description: "creamy and sweet beverage made from rice, almonds, cinnamon,and sugar",
    calorie: 220, price: 2.8, menugroup: "soft_drink"
  },
  {
    name: "Mineral Water",
    description: "naturally carbonated water sourced from underground springs",
    calorie: 0, price: 2, menugroup: "soft_drink"
  },
]

//The menu items of hot drinks
const hotDrink = [
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

  // The menu items of beer
  const [Beer, setBeer] = useState([
    { name: "Corona Extra", description: "light, refreshing with wedge of lime", calorie: 300, price: 3, menugroup: "Beer", image_path: "corona-extra.jpg" },
    { name: "Modelo Especial", description: "balanced flavour profile, and smooth, crisp finish", calorie: 150, price: 2, menugroup: "Beer", image_path: "modelo-especial.jpg" },
    { name: "Pacifico", description: "crisp taste with a touch of malt sweetness", calorie: 150, price: 2.3, menugroup: "Beer", image_path: "pacifico.jpg" },
    {
      name: "Dos Equis", description: "smooth flavour with hints of toasted malt",
      calorie: 180, price: 3,
      menugroup: "beer", image_path: "dos-equis.jpg"
    },
  ])

  //the state of allery list
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    nonAlcoholic: true,
    alcoholic: true,
  });

  // the function to set the state to control menu display
  const handleAllergy = (e) => {
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
      <div class="bg-cherry w-auto h-auto border-gray-200 p-4 pl-48">
        <div class=" flex flex-wrap justify-between mx-auto p-1 w-full">
          <span class="text-lemon line-height:1.25rem text-2xl ">
            <b>Dietary Filter</b>
          </span>
        </div>
        <div class="bg-lemon w-5/6 h-[160px] rounded-2xl pt-5 px-20">
          <div class="pl-2 text-cherry w-1/2 inline float-left">
            <span class="text-xl">
              <b>Does Not Contain:</b>
            </span>
            <div class="flex items-center my-4">
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

          </div>
        </div>
      </div>
      <div class="bg-lemon border-gray-200 dark:bg-gray-900 w-auto h-auto px-7">


        {allergy.alcoholic && (
          <Fragment>
            <img
              src="/menu/beers.jpg"
              alt="picture"
              class="w-1/2 h-16 ml-72 mt-5"
            />
            <div class=" w-10/12 h-auto bg-amber ml-32 rounded-xl p-3 rounded-xl">
              <table class=" text-lg text-left text-lemon">
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
                  {Beer.map((item) => (
                    <tr class="bg-amber">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>{item.name}</b>
                        <p class="text-gray-900">
                          {item.description}
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">{item.calorie} kcal</td>
                      <td class="px-6 py-4 text-gray-900">{item.menugroup}</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡{item.price}</b>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>


            <img
              src="/menu/cocktails.jpg"
              alt="picture"
              class="w-1/2 h-16 ml-72 mt-5"
            />
            <div class=" w-10/12 h-auto bg-amber ml-32 rounded-xl p-3 rounded-xl">
              <table class=" text-lg text-left text-lemon">
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
                  {cocktail.map((item) => (
                    <tr class="bg-amber">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>{item.name}</b>
                        <p class="text-gray-900">
                          {item.description}
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">{item.calorie} kcal</td>
                      <td class="px-6 py-4 text-gray-900">{item.menugroup}</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡{item.price}</b>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </Fragment>)}
        {allergy.nonAlcoholic && (
          <Fragment>
            <img
              src="/menu/softDrinks.jpg"
              alt="picture"
              class="w-1/2 h-14 ml-72 mt-5"
            />
            <div class=" w-10/12 h-auto bg-amber ml-32 rounded-xl p-3 rounded-xl my-4">
              <table class=" text-lg text-left text-lemon">
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
                  {softDrink.map((item) => (
                    <tr class="bg-amber">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>{item.name}</b>
                        <p class="text-gray-900">
                          {item.description}
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">{item.calorie} kcal</td>
                      <td class="px-6 py-4 text-gray-900">{item.menugroup}</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡{item.price}</b>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
            <img
              src="/menu/hotDrinks.jpg"
              alt="picture"
              class="w-1/2 h-14 ml-72 mt-5"
            />
            <div class=" w-10/12 h-auto bg-amber ml-32 rounded-xl p-3 rounded-xl my-4">
              <table class=" text-lg text-left text-lemon">
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
                  {hotDrink.map((item) => (
                    <tr class="bg-amber">
                      <th scope="row" class="px-6 h-5 font-medium text-lemon">
                        <b>{item.name}</b>
                        <p class="text-gray-900">
                          {item.description}
                        </p>
                      </th>
                      <td class="px-6 py-4 text-gray-900">{item.calorie} kcal</td>
                      <td class="px-6 py-4 text-gray-900">{item.menugroup}</td>
                      <td class="px-6 py-4 text-gray-900">
                        <b>￡{item.price}</b>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </Fragment>)}
        <p className="ml-24 text-lg my-1">
          This menu will display all drinks for reference only, subject to
          availability.
        </p>
      </div>
    </div>



  );
};

export default DrinkFilterMenu;
