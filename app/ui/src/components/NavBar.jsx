'use client';

import { Navbar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

{/* Navigation bar component that allows users to easily select, and be taken to, pages they wish to view */}
function NavBar() {
    return (
        <Navbar className="bg-cherry">
            <Navbar.Collapse>

                {/* Link to Home Page */}
                <Link to="/" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>Home</span>
                </Link>

                {/* Dropdown of menu options, including links to the food and drink menu pages */}
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

                {/* Link to Order Page */}
                <Link to="/Order" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>Order</span>
                </Link>

                {/* Link to Contact Us Page */}
                <Link to="/Contact" className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
                    <span>Contact Us</span>
                </Link>

            </Navbar.Collapse>

            <Link to="/FoodMenu">
                <img className="h-16" src="/images/OaxacaLogo.png" alt="Oaxaca Logo" />
            </Link>
        </Navbar>
    );
}


export default NavBar