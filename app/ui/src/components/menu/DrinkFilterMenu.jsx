import { useState } from "react";

{/*Component which displays the drink items and required information, and a filter that removes requested items from view*/}

{/*Cocktail items*/}
const cocktail = [
  {
    name: "Margarita",
    description: "Classic cocktail featuring tequila, lime juice, and orange liqueur served over ice and often rimmed with salt",
    calorie: 290, price: "8.00", menugroup: "Cocktail",
    image_path: "margarita.jpg"
  },
  {
    name: "Paloma",
    description: "Refreshing Mexican cocktail made with tequila, grapefruit soda, lime juice, and a pinch of salt, served over ice",
    calorie: 250, price: "9.00", menugroup: "Cocktail",
    image_path: "paloma.jpg"
  },
  {
    name: "Michelada",
    description: "Spicy and savory Mexican beer cocktail made with beer, lime juice, assorted sauces, spices, and chili peppers, served over ice with a salted rim",
    calorie: 140, price: "11.00", menugroup: "Cocktail",
    image_path: "michelada.jpg"
  },
  {
    name: "Tequila Sunrise",
    description: "Made with tequila, orange juice, and grenadine, creating a gradient of colours resembling a sunrise",
    calorie: 300, price: "8.00", menugroup: "Cocktail",
    image_path: "tequila-sunrise.jpg"
  },
  {
    name: "Mexican Mule",
    description: "Variation of the classic Moscow Mule cocktail, made with tequila, lime juice, and ginger beer, served over ice with a wedge of lime",
    calorie: 240, price: "10.00", menugroup: "Cocktail",
    image_path: "mexican-mule.jpg"
  },
]

{/*Soft Drink items*/}
const softDrink = [
  {
    name: "Jarritos",
    description: "Fruit flavoured soda- available in lime, pineapple, and mandarin",
    calorie: 200, price: "2.00", menugroup: "Soft Drink"
  },
  {
    name: "Peach Iced Tea", 
    description: "Homemade with fresh peaches", calorie: 150, price: "3.00", menugroup: "Soft Drink"
  },
  {
    name: "Horchata",
    description: "Creamy and sweet beverage made from rice, almonds, cinnamon, and sugar",
    calorie: 220, price: "2.80", menugroup: "Soft Drink"
  },
  {
    name: "Mineral Water",
    description: "Naturally carbonated water sourced from underground springs",
    calorie: 0, price: "2.00", menugroup: "Soft Drink"
  },
]

{/*Hot Drink items*/}
const hotDrink = [
  {
    name: "Mexican Hot Chocolate",
    description: "Hot chocolate spiced with cinnamon and chili", 
    calorie: 300, price: "4.50", menugroup: "Hot Drink",
    image_path: "mexican-hot-chocolate.jpg"
  },
  {
    name: "Cafe de Olla",
    description: "Coffee brewed with cinnamon and piloncillo, unrefined cane sugar",
    calorie: 180, price: "3.00", menugroup: "Hot Drink",
    image_path: "cafe-de-olla.jpg"
  },
  {
    name: "Atole",
    description: "Comforting beverage made from masa harina (corn flour), water or milk, sweeteners, and spices",
    calorie: 130, price: "2.50", menugroup: "Hot Drink",
    image_path: "attole.jpg"
  },
  {
    name: "Agua de Jamaica", 
    description: "Tangy and sweet hibiscus flower tea",
    calorie: 90, price: "1.20", menugroup: "Hot Drink",
    image_path: "agua-de-jamaica.jpg"
  },
]

const DrinkFilterMenu = () => {

  {/*Beer items*/}
  const [Beer, setBeer] = useState([
    { 
      name: "Corona Extra", 
      description: "Light, refreshing with wedge of lime", 
      calorie: 300, price: "3.00", menugroup: "Beer", 
      image_path: "corona-extra.jpg" 
    },
    { 
      name: "Modelo Especial", 
      description: "Balanced flavour profile, and smooth, crisp finish", 
      calorie: 150, price: "2.00", menugroup: "Beer", 
      image_path: "modelo-especial.jpg" 
    },
    { 
      name: "Pacifico", 
      description: "Crisp taste with a touch of malt sweetness", 
      calorie: 150, price: "2.30", menugroup: "Beer", 
      image_path: "pacifico.jpg" },
    {
      name: "Dos Equis", 
      description: "Smooth flavour with hints of toasted malt",
      calorie: 180, price: "3.00", menugroup: "Beer", 
      image_path: "dos-equis.jpg"
    },
  ])

  {/*Allergy list for dietary filter*/}
  const [allergy, setAllergy] = useState({
    //if the state of nonspicy changed to be false, the spicy food won't show out
    fruit: true,
    nonAlcoholic: true,
    alcoholic: true,
    gluten: true,
    dairy: true,
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
      //update the beer items to filter the item included fruit
      if (value === "fruit") {
        setBeer([
          { name: "Modelo Especial", description: "balanced flavour profile, and smooth, crisp finish", calorie: 150, price: "2.00", menugroup: "Beer", image_path: "modelo-especial.jpg" },
          { name: "Pacifico", description: "crisp taste with a touch of malt sweetness", calorie: 150, price: "2.30", menugroup: "Beer", image_path: "pacifico.jpg" },
          {
            name: "Dos Equis", description: "smooth flavour with hints of toasted malt",
            calorie: 180, price: "3.00",
            menugroup: "Beer", image_path: "dos-equis.jpg"
          },
        ])
      }
    } else {
      setAllergy({
        ...allergy,
        [value]: true,
      });
      //to recover the original beer menu item
      if (value === "fruit") {
        setBeer([
          { name: "Corona Extra", description: "light, refreshing with wedge of lime", calorie: 300, price: "3.00", menugroup: "Beer", image_path: "corona-extra.jpg" },
          { name: "Modelo Especial", description: "balanced flavour profile, and smooth, crisp finish", calorie: 150, price: "2.00", menugroup: "Beer", image_path: "modelo-especial.jpg" },
          { name: "Pacifico", description: "crisp taste with a touch of malt sweetness", calorie: 150, price: "2.30", menugroup: "Beer", image_path: "pacifico.jpg" },
          {
            name: "Dos Equis", description: "smooth flavour with hints of toasted malt",
            calorie: 180, price: "3.00",
            menugroup: "beer", image_path: "dos-equis.jpg"
          },
        ])
      }
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
      <div class="bg-lemon border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between my-auto mx-auto w-auto h-auto px-7">
          <p className="ml-20 text-lg my-1">
            This menu will display all drinks for reference only, subject to
            availability.
          </p>
          <img
            src="/menu/beers.jpg"
            alt="picture"
            class="w-1/2 h-16 ml-72 mt-4"
          />
          <div class="w-10/12 h-90 bg-amber ml-24 rounded-xl p-3 overflow-x-auto  rounded-xl my-4">

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

        </div>
        <img
          src="/menu/cocktails.jpg"
          alt="picture"
          class="w-1/2 h-16 ml-72 mt-5"
        />
        <div class=" w-[940px] h-90 bg-amber ml-32 rounded-xl p-3 overflow-x-auto rounded-xl">
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
        <img
          src="/menu/softDrinks.jpg"
          alt="picture"
          class="w-1/2 h-14 ml-72 mt-5"
        />
        <div class=" w-[940px] h-90 bg-amber ml-32 rounded-xl p-3 overflow-x-auto rounded-xl my-4">
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
        <div class=" w-[940px] h-90 bg-amber ml-32 rounded-xl p-3 overflow-x-auto rounded-xl my-4">
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
      </div>
    </div>



  );
};

export default DrinkFilterMenu;
