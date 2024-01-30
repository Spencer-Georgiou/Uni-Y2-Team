/*
This is the mock menu page.
shows how to change the page between menu and login page.

Last changed: 30/1
*/

import {Link, useNavigate} from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()
    return (
    <div>
        I am menu page
        {/*use link to jump  */}
        <Link to="/">jump to login</Link>
        {/*use useNavigate to jump  */}
        <button onClick={() => navigate('/')}>jump to login</button>
    </div>
    )
}

export default Menu