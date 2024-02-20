// router configuration
import { createBrowserRouter } from 'react-router-dom'

//import pages
import Homepage from '../Pages/Homepage/Homepage'
import Login from '../Pages/Login'
import Menu from '../Pages/Menu'


//Configure routing instance
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/Menu",
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