'use client';

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

{/*Takes users to Order Page.*/}
function OrderButton() {
    return (
        <Link to="/Order" className="container py-5 min-w-full grid place-items-center bg-lemon">
            <button type="button" className="px-12 py-7 text-3xl text-lemon bg-amber rounded-lg text-center font-semibold font-sans hover:ring-4 hover:ring-cherry focus:ring-cherry">
                Order Now!
            </button>
        </Link>
    );
}

export default OrderButton

