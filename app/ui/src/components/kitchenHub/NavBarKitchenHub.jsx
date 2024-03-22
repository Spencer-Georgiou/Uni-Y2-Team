'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavBarKitchenHub() {
    return (
        <Navbar className="bg-cherry flex items-center justify-between">
            <div className=" flex flex-1 flex-nowrap">
                <Link to="/WaiterHub">
                    <span className="self-center text-xl text-lemon font-semibold underline">Kitchen Hub</span>
                </Link>


            </div>
            <div className="flex flex-1 justify-center flex-nowrap">
                {/* restaurant logo */}
                <Link to="/">
                    <img className="h-16" src="/images/OaxacaLogo.png" alt="Oaxaca Logo" />
                </Link>
            </div>
            {/* the avatar icon with a dropdown displaying log out which takes you back to StaffLogin */}
            <div className="flex flex-1 justify-end items-center">
                <Dropdown className="bg-lemon" label={
                    <Avatar rounded />
                }>
                    <Dropdown.Item as={Link} to="/StaffLogin" className="focus:bg-lemon font-semibold text-cherry">
                        Logout
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar >

    );
}

export default NavBarKitchenHub