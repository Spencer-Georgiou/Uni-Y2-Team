'use client';

import { Navbar } from 'flowbite-react';


function NavBarHomepage() {
    return (
        <Navbar className="bg-cherry">
            <Navbar.Collapse>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon dark:text-white hover:text-white hover:underline" href="/">Home</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon dark:text-white hover:text-white hover:underline" href="/Menu">Menu</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon dark:text-white hover:text-white hover:underline" href="/Order">Order</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon dark:text-white hover:text-white hover:underline" href="/Contact Us">Contact Us</Navbar.Link>

            </Navbar.Collapse>
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse mx-auto max-w-screen-xl p-4">
                <img src="/images/OaxacaLogo.png"  class="h-8" alt="OaxacaLogo Logo" />
            </a>
            <button type="button" class="focus:outline-none text-lemon bg-cherry hover:bg-lemon focus:ring-4 focus:ring-cherry font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>

        </Navbar>
    );
}


export default NavBarHomepage