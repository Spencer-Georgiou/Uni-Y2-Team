// router configuration
import {createBrowserRouter} from 'react-router-dom'

//import pages
import Login from '../Pages/Login'
import Menu from '../Pages/Menu'


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

])

//export router
export default router