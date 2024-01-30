/*
This is the mock login page.
shows how to change the page between menu and login page.

Last changed: 30/1
*/

import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
    <div>
        <h1>I am login page  </h1>
        {/*use link to jump  */}
        <Link to="/menu">jump to menu</Link>
        {/*use useNavigate to jump  */}
        <button onClick={() => navigate('/menu')}>jump to menu</button>
    </div>
    )
}

export default Login