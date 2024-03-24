'use client';

import { Navbar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavBarStaff() {
    return (
        <Navbar className="bg-cherry">
            <Navbar.Collapse>
                <Link to="/" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>Home</span>
                </Link>

                {/* Link to About Us Page */}
                <Link to="/AboutUs" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>About Us</span>
                </Link>

                <div className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <Dropdown label="Menus" inline className="bg-lemon border-lemon text-cherry">
                        <Dropdown.Item as={Link} to="/FoodMenu">
                            Food Menu
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/DrinkMenu">
                            Drink Menu
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <Link to="/Order" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>Order</span>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavBarStaff