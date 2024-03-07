"use client";

import { Navbar, Dropdown, Button } from "flowbite-react";
import { Link } from "react-router-dom";

{
  /* Navigation bar component that allows users to easily select, and be taken to, pages they wish to view */
}
function NavBar() {
  return (
    <Navbar className="bg-cherry">
      {/* Any items within collapse tags will 'disappear' on smaller windows */}
      <Navbar.Collapse>
        {/* Link to Home Page */}
        <Link
          to="/"
          className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline"
        >
          <span>Home</span>
        </Link>

        {/* Link to About Us Page */}
        <Link
          to="/AboutUs"
          className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline"
        >
          <span>About Us</span>
        </Link>

        {/* Dropdown of menu options, including links to the food and drink menu pages */}
        <div className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline">
          <Dropdown
            label="Menus"
            inline
            className="text-cherry bg-lemon border-lemon "
          >
            <Dropdown.Item as={Link} to="/FoodMenu" className="focus:bg-amber">
              Food Menu
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/DrinkMenu" className="focus:bg-amber">
              Drink Menu
            </Dropdown.Item>
          </Dropdown>
        </div>

        {/* Link to Order Page */}
        <Link
          to="/Order"
          className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline"
        >
          <span>Order</span>
        </Link>

        {/* Link to Contact Us Page */}
        <Link
          to="/Contact"
          className="font-sans font-medium font-semibold text-lemon hover:text-amber hover:underline"
        >
          <span>Contact Us</span>
        </Link>
      </Navbar.Collapse>

      <div className="flex md:order-1">
        {/* Displays restaurant logo */}
        <Link to="/">
          <img
            className="h-16"
            src="/images/OaxacaLogo.png"
            alt="Oaxaca Logo"
          />
        </Link>
      </div>

      <div className="flex gap-2 md:order-2 ">
        <Dropdown label={<span className="font-sans font-semibold text-lemon border-lemon" >Log in</span>} dismissOnClick={false}>
          <Dropdown.Item as={Link} to="/StaffLogin" className="focus:bg-amber">Staff Login</Dropdown.Item>
          <Dropdown.Item as={Link} to="/CustomerLogin" className="focus:bg-amber">Customer Login</Dropdown.Item>
        </Dropdown>
        <Button as={Link} to="Registration" className="font-sans font-semibold text-cherry bg-lemon hover:ring-4 hover:ring-amber focus:ring-amber">Sign Up</Button>
        {/* Page navigation options disappear into hamburger dropdown button on smaller screens */}
        <Navbar.Toggle className="text-cherry bg-lemon ring-lemon focus:ring-amber hover:bg-amber" />
      </div>
    </Navbar>
  );
}

export default NavBar;
