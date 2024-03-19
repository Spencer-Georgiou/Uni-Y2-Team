
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

{/*NavBar displayed on the Waiter's Hub, showing the logo, return to main hub link and account icon.*/ }
function NavBarWaiterHub() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        Cookies.remove('session_key');
        console.log('removed cookie');

        navigate('/StaffLogin');
    }




    return (
        <Navbar className="bg-cherry flex items-center justify-between w-screen">
            <div className=" flex flex-1 flex-nowrap">
                <Link to="/WaiterHub">
                    <span className="self-center text-xl text-lemon font-semibold underline">Waiter Hub</span>
                </Link>


            </div>
            <div className="flex flex-1 justify-center flex-nowrap">
                {/*Restaurant logo*/}
                <Link to="/">
                    <img className="h-16" src="/images/OaxacaLogo.png" alt="Oaxaca Logo" />
                </Link>
            </div>
            {/*The avatar icon with a dropdown displaying log out which takes you back to StaffLogin*/}
            <div className="flex flex-1 justify-end items-center">
                <Dropdown className="bg-lemon" label={
                    <Avatar rounded />
                }>
                    <Dropdown.Item onClick={handleLogOut} className="focus:bg-lemon font-semibold text-cherry">
                        Logout
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar >

    );
}

export default NavBarWaiterHub

