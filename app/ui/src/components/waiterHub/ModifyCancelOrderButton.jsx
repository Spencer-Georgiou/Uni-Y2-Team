'use client'

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function ModifyCancelOrderButton() {
    return (

      // <Button as={Link} to="ModifyCancelOrder" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg">Modify/Cancel Order</Button>
  
      <button type="button" as={Link} to="ModifyCancelOrder" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg">
        Modify/Cancel Order
      </button>
  
    );
  }
  
  export default ModifyCancelOrderButton