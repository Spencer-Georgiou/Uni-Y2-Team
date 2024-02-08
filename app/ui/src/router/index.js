// router configuration
import { createBrowserRouter } from 'react-router-dom'

//import pages
import Menu from '../Pages/Menu'
import CustomerLogin from '../Pages/Login/CustomerLogin'


//Configure routing instance
const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLogin />
    },


])

//export router
export default router