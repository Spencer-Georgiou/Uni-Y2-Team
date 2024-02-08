import { Forms } from "flowbite-react"

const Form_customer = () => {
    return (
        <form className="max-w-lg mx-auto">
            <div className="mb-5">
                <input type="text" id="username" className="bg-lemon border border-lemon text-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
            </div>
            <div className="mb-5">
                <input type="password" id="password" className="bg-lemon border border-lemon text-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
            </div>
            <div className="flex justify-center">
                <button type="submit" className="text-black font-sans font-medium font-semibold bg-lemon font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </div>

        </form>

    )

}

export default Form_customer