'use client'

import { Link } from 'react-router-dom';

function ChangeMenuButton() {
  return (

    <Link to="/ChangeMenu" className="flex items-center justify-center">
      <button type="button" className="bg-amber text-lemon font-sans font-bold py-2 px-4 rounded-lg hover:text-yellow-200">
        Change Menu
      </button>
    </Link>

  );
}

export default ChangeMenuButton