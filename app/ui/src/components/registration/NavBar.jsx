import { Button, Navbar } from "flowbite-react"


const NavBar = () => {
    return (
        <nav class="bg-cherry">
                
        <div class="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto p-4">
            
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-0" id="navbar-sticky">
            
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
                <a href="#" class="block py-2 px-3 text-lemon rounded md:hover:text-amber">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-lemon rounded md:hover:text-amber">Menus</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-lemon rounded md:hover:text-amber">Order</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-lemon rounded md:hover:text-amber">Contact Us</a>
            </li>
            </ul>
        </div>

        <a href="#" class="flex items-left space-x-3 rtl:space-x-reverse md:order-1">
                <img src="images/OaxacaLogo.png" class="h-12" alt="Oaxaca Logo" />
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            <button type="button" class="text-rose bg-yellow-300 focus:ring-4 focus:outline-amber focus:ring-amber font-medium rounded-lg text-sm px-4 py-2 text-center" aria-current="page">Register</button>
            <button type="button" class="text-rose bg-yellow-300 focus:ring-4 focus:outline-amber focus:ring-amber font-medium rounded-lg text-sm px-4 py-2 text-center">Log In</button>
        </div>
        </div>
    </nav>


    )

}

export default NavBar
