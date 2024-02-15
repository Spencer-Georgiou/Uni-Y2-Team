// router configuration
import { createBrowserRouter } from 'react-router-dom'

//import pages
import CustomerLogin from '../Pages/Login/CustomerLogin'
import StaffLogin from '../Pages/Login/StaffLogin'


//Configure routing instance
const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLogin />

    },

    {
        path: "/StaffLogin",
        element: <StaffLogin />
    },



])

//export router
export default router