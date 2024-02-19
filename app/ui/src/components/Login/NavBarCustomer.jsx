'use client';

import { Navbar } from 'flowbite-react';
//import DropDownMenu from './DropDownMenu';

function NavBarCustomer() {
    return (
        <Navbar className="bg-orangy">
            <Navbar.Collapse>
                <Navbar.Link className="font-sans font-medium font-semibold text-cherry dark:text-white hover:text-white hover:underline" href="/">Home</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-cherry dark:text-white hover:text-white hover:underline" href="/Menu">Menu</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-cherry dark:text-white hover:text-white hover:underline" href="/Order">Order</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-cherry dark:text-white hover:text-white hover:underline" href="/Contact Us">Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBarCustomer