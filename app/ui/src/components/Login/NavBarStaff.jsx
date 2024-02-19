'use client';

import { Navbar } from 'flowbite-react';

function NavBarStaff() {
    return (
        <Navbar className="bg-cherry">
            <Navbar.Collapse>
                <Navbar.Link className="font-sans font-medium font-semibold text-orangy dark:text-white hover:text-white hover:underline" href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-orangy dark:text-white hover:text-white hover:underline" href="/Menu">Menu</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-orangy dark:text-white hover:text-white hover:underline" href="/Order">Order</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-orangy dark:text-white hover:text-white hover:underline" href="/Contact Us">Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBarStaff