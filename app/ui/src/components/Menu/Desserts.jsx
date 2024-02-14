// This is the desserts menu

const Desserts = () => {
  return (
    // the background
    <div class="bg-lemon border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
        {/* the title image */}
        <img
          src="/menu/desserts.png"
          alt="picture"
          class="w-1/2 h-20 ml-80 mt-7"
        />
        {/* the menu block */}
        <div class="w-10/12 h-90 bg-juice ml-24">
          <div class="relative overflow-x-auto">
            {/* the menu table */}
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
                    <b> Churros</b>
                    <p class="text-gray-900">
                      Fried churros with a chocolate filling(Vg)
                    </p>
                  </th>
                  <td class="px-6 py-4 text-gray-900">500 kcal</td>
                  <td class="px-6 py-4 text-gray-900">Vegan</td>
                  <td class="px-6 py-4 text-gray-900">
                    <b>￡4.00</b>
                  </td>
                </tr>
                <tr class="bg-juice">
                  <th scope="row" class="px-6 h-5 font-medium text-lemon">
                    <b>Sweet Fried Plantains</b>
                    <p class="text-gray-900">Sugar coated fried plantains(V)</p>
                  </th>
                  <td class="px-6 py-4 text-gray-900">300 kcal</td>
                  <td class="px-6 py-4 text-gray-900">Vegetarian</td>
                  <td class="px-6 py-4 text-gray-900">
                    <b>￡3.00</b>
                  </td>
                </tr>
                <tr class="bg-juice">
                  <th scope="row" class="px-6 h-5 font-medium text-lemon">
                    <b>Ice cream</b>
                    <p class="text-gray-900">
                      2 scoops of ice cream, choose between: (Vg)
                    </p>
                    <p class="text-gray-900 ml-3">• Vanilla</p>
                    <p class="text-gray-900 ml-3"> • Chocolate</p>
                    <p class="text-gray-900 ml-3"> • Strawberry</p>
                  </th>
                  <td class="px-6 py-4 text-gray-900">300 kcal</td>
                  <td class="px-6 py-4 text-gray-900">Vegan</td>
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
  );
};

export default Desserts;
