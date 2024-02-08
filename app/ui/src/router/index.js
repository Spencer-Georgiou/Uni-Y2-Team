// router configuration
import {createBrowserRouter} from 'react-router-dom'

//import pages
import Login from '../Pages/Login'
import Menu from '../Pages/Menu/menu'
import Home from '../Pages/Home/home'


//Configure routing instance
const router = createBrowserRouter([
    {
        path:"/",
        element:<Menu/>
    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Menu",
        element:<Menu/>
    },

])

//export router
export default router