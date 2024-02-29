'use client';

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function OrderButton() {
    return (
        <Link to="/Order" className="flex items-center justify-center">
        <button type="button" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg">
          Order Now!
        </button>
      </Link>
    );
}

export default OrderButton