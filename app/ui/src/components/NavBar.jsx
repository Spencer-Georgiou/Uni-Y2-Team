import { Navbar } from "flowbite-react"
import './NavBar1.css'

const Navbar1 = () => {
    return (
        <div>

            <nav class="bg-cherry border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" class="text-lemon-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li class="blt">
                                <a href="#" class="text-lemon-900 dark:text-white hover:underline">Menu</a>
                                    <ul class="droplist">
                                        <li><a href="#" class="text-cherry">food menu</a></li>
                                        <li><a href="#" class="text-cherry">drink menu</a></li>
                                    </ul>

                            </li>
                            <li>
                                <a href="#" class="text-lemon-900 dark:text-white hover:underline">Find Us</a>
                            </li>
                            <li>
                                <a href="#" class="text-lemon-900 dark:text-white hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/OaxacaLogo.png" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OAXACA</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#" class="text-xl  text-lemon-600 dark:text-blue-500 hover:underline">Login</a>
                        <a href="#" class="text-xl  text-lemon-600 dark:text-blue-500 hover:underline">Register</a>
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default Navbar1