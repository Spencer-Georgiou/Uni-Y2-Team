import { Table } from "flowbite-react"

const Starters = () => {
    return (
        <div class="bg-lemon border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
                <img src="/menu/starters.png" alt="picture" class="w-1/2 h-20 ml-80 mt-7" />
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
                                        <b>TBurr</b>
                                        <p class="text-gray-900">Crispy tacos filled with cheese</p>
                                        <p class="text-gray-900 ml-3"> • Beef chilli</p>
                                        <p class="text-gray-900 ml-3"> • Bean chilli(Vg)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        600 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        Spicy, Vegan
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡5.00</b>
                                    </td>
                                </tr>
                                <tr class="bg-juice">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Jalapeno Poppers</b>
                                        <p class="text-gray-900">With cream cheese(Vg)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        450 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        Vegan
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡3.50</b>
                                    </td>
                                </tr>
                                <tr class="bg-juice">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Patatas Bravas</b>
                                        <p class="text-gray-900">Roasted potatoes in tomato dressing(V)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        500 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    Vegetarian
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡3.00</b>
                                    </td>
                                </tr>
                                <tr class="bg-juice">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Crispy Cauliflower Bites</b>
                                        <p class="text-gray-900">Roasted cauliflower in jalapeno dressing(V)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        200 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    Vegetarian
                                    </td>
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

    )
}

export default Starters