import { Navbar } from "flowbite-react"
import './NavBar1.css'

const Navbar_customer = () => {
    return (
        <div>
            <nav className="bg-orangy border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    <div className="flex items-center">
                        <ul className="flex flex-row font-sans font-medium font-semibold mt-0 space-x-8 rtl:space-x-reverse text-base">
                            <li>
                                <a href="#" className="text-cherry dark:text-white hover:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li className="blt">
                                <a href="#" className="text-cherry dark:text-white hover:text-white hover:underline">Menu</a>
                                <ul className="droplist">
                                    <li><a href="#" className="text-cherry">food menu</a></li>
                                    <li><a href="#" className="text-cherry">drink menu</a></li>
                                </ul>

                            </li>
                            <li>
                                <a href="#" className="text-cherry dark:text-white hover:text-white hover:underline">Order</a>
                            </li>
                            <li>
                                <a href="#" className="text-cherry dark:text-white hover:text-white hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default Navbar_customer