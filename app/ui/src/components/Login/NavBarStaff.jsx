'use client';

import { Navbar } from 'flowbite-react';

function NavBarStaff() {
    return (
        <Navbar className="bg-cherry">
            <Navbar.Collapse>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline" href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline" href="/Menu">Menus</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline" href="/Order">Order</Navbar.Link>
                <Navbar.Link className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline" href="/Contact Us">Contact Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBarStaff