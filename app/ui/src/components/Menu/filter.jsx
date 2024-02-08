const Filter = () => {
    return (
        <div class="bg-cherry w-full h-96 border-gray-200 p-4 pl-48">
            <div class="flex flex-wrap justify-between mx-auto">
                <div class="my-2.5 p-1 w-full">
                    <span class="text-lemon line-height:1.25rem text-2xl "><b>Dietary Filter</b></span>
                </div>
                <div class="bg-lemon w-5/6 height h-72 rounded-2xl pt-5 px-20">
                    <div class="pl-2 text-cherry w-1/2 inline float-left">
                        <span class="text-xl"><b>Show Me:</b></span>
                        <div class="flex items-center my-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Vegetarian</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Vegan</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Halal</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Spicy</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Non-Spicy</b></label>
                        </div>
                    </div>
                    <div class="pl-2 text-cherry w-56 inline float-left">
                        <span class="text-xl"><b>Does Not Contain:</b></span>
                        <div class="flex items-center my-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Gluten</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Dairy</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Nuts</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Eggs</b></label>
                        </div>
                        <div class="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-checkbox" class="ms-4 text-base font-medium text-cherry-900 dark:text-gray-300"><b>Mollusks</b></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Filter