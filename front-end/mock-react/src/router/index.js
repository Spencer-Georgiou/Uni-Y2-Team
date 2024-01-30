import Login from '../page/Login'
import Menu from '../page/Menu'

//which is used to create browser
import { createBrowserRouter } from 'react-router-dom'

//this is the main router.
const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/menu',
        element:<Menu/>
    }
])

export default router
