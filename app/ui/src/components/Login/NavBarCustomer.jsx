'use client';

import { Navbar } from 'flowbite-react';


function NavBarCustomer() {
    return (
        <Navbar className="bg-amber">
            <Navbar.Collapse>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-cherry hover:underline" href="/">Home</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-cherry hover:underline" href="/Menu">Menu</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-cherry hover:underline" href="/Order">Order</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-cherry hover:underline" href="/Contact Us">Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBarCustomer