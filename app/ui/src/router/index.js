// router configuration
import { createBrowserRouter } from 'react-router-dom'

//import pages
import Login from '../pages/Login'
import Menu from '../pages/Menu'


//Configure routing instance
const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Registration",
        element: <Registration />
    },
])

//export router
export default router