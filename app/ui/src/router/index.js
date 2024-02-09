// router configuration
import {createBrowserRouter} from 'react-router-dom'

//import pages
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import Menu from '../Pages/Menu'


//Configure routing instance
const router = createBrowserRouter([
    {
        path:"/",
        element:<Registration/>
    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Registration",
        element:<Registration/>
    },

])

//export router
export default router