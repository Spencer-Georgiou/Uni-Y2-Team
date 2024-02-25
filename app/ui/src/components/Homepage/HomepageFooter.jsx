
import { Link } from 'react-router-dom';

function HomepageFooter() {
    return(
        <footer class="bg-cherry">
            <div class="w-full h-auto mx-auto max-w-screen p-2 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse pb-1">
                        <img className="h-20" src="/images/OaxacaLogo.png"/>
                        <span className="text-lemon text-4xl rtl:space-x-reverse font-semibold font-sans whitespace-nowrap">Oaxaca</span>
                    </Link>

                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">

                        <li>
                            <Link to="/AboutUs" className="hover:underline me-4 md:me-6">
                            <span>About Us</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">
                            <span>Privacy Policy</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">
                            <span>Cookies</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Contact" className="hover:underline me-4 md:me-6">
                            <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
                <span class="block text-sm text-black sm:text-center py-2">© 2024 <Link to="/" class="hover:underline">Oaxaca</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default HomepageFooter
