'use client'

import { Link } from 'react-router-dom';

{/*Button that allows waiters to create a new order via the NewOrder page.*/}
function NewOrderButton() {
  return (

    <Link to="/NewOrder" className="flex items-center justify-center">
    <button type="button" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg">
      New Order
    </button>
  </Link>

  );
}

export default NewOrderButton
