'use client'
import { Link } from 'react-router-dom';

{/*Button that will allow the waiter to modify or cancel an order via the ModifyCancelOrder page.*/ }
function ModifyCancelOrderButton() {
  return (
    <Link to="/ModifyCancelOrder" className="flex items-center justify-center">
      <button type="button" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg hover:text-yellow-200">
        Modify/Cancel Order
      </button>
    </Link>

  );
}

export default ModifyCancelOrderButton