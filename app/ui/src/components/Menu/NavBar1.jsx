import { Navbar, Dropdown } from "flowbite-react";
import "./NavBar1.css";

// this is the navbar of food menu

const Navbar1 = () => {
  return (
    <nav class="bg-cherry border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a
                href="#"
                class="text-lemon-900 dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Dropdown class="text-xl" label="Menu" inline>
                <Dropdown.Item href="#" class="bg-lemon text-cherry">
                  Food Menu
                </Dropdown.Item>
                <Dropdown.Item href="#" class="bg-lemon text-cherry">
                  Drink Menu
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li>
              <a
                href="#"
                class="text-lemon-900 dark:text-white hover:underline"
              >
                Find Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-lemon-900 dark:text-white hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/OaxacaLogo.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            OAXACA
          </span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="#"
            class="text-xl  text-lemon-600 dark:text-blue-500 hover:underline"
          >
            Login
          </a>
          <a
            href="#"
            class="text-xl  text-lemon-600 dark:text-blue-500 hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
