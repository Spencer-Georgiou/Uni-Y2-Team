'use client';

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function OrderButton() {
    return (
        <div class = "container py-5 min-w-full grid place-items-center bg-lemon">
            <button type="button" as={Link} to="Order" className="px-12 py-7 text-3xl text-lemon bg-amber rounded-lg text-center font-semibold font-sans">Order Now!</button>
            {/* <Button as={Link} to="Order" class = "px-12 py-7 font-sans flex text-sm font-semibold text-lemon bg-amber hover:ring-amber focus:ring-4 focus:ring-lemon rounded-lg text-center dark:bg-orangy">Order Now!</Button> */}
        </div>
    );
}

export default OrderButton