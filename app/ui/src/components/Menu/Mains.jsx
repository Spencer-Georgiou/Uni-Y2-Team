import { Table } from "flowbite-react"

const Mains = () => {
    return (
        <div class="bg-lemon border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between mx-auto w-full h-128 px-7">
                <img src="/menu/mains.png" alt="picture" class="w-1/2 h-20 ml-80 mt-7" />
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
                                        <b>Burrito</b>
                                        <p class="text-gray-900">Rice, beans and cheese wrapped up in a flour tortilla(V)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        350 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    Vegetarian
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡6.00</b>
                                    </td>
                                </tr>
                                <tr class="bg-cherry">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Chorizo Quesadilla</b>
                                        <p class="text-gray-900">Chorizo and cheese toasted in a flour tortilla</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        400 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    ------
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡7.50</b>
                                    </td>
                                </tr>
                                <tr class="bg-cherry">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Bean Tostadas</b>
                                        <p class="text-gray-900">chickpeas, beans and peas with tomato salsa(V)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        300 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    Vegetarian
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡6.00</b>
                                    </td>
                                </tr>
                                <tr class="bg-cherry">
                                    <th scope="row" class="px-6 h-5 font-medium text-lemon">
                                        <b>Halloumi Skewers</b>
                                        <p class="text-gray-900">Roasted Halloumi cheese and vegetables(Vg)</p>
                                    </th>
                                    <td class="px-6 py-4 text-gray-900">
                                        500 kcal
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                    Vegan
                                    </td>
                                    <td class="px-6 py-4 text-gray-900">
                                        <b>￡5.50</b>
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

export default Mains