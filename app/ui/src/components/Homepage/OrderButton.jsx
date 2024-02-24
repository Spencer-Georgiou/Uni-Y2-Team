'use client';

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function OrderButton() {
    return (
        <div class = "container py-10 px-10 mx-0 min-w-full grid place-items-center" style={{backgroundColor: 'gold'}}>
            <Button as={Link} to="Order" class = "px-6 py-3.5 font-sans font-semibold font-xl text-lemon bg-orangy hover:ring-amber focus:ring-4 focus:ring-lemon rounded-lg text-center dark:bg-orangy">Order Now!</Button>
        </div>
    );
}

export default OrderButton