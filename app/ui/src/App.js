import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import CustomerLogin from './pages/login/CustomerLogin';
import StaffLogin from './pages/login/StaffLogin';
import Registration from './pages/registration/Registration';
import FoodMenu from './pages/menu/FoodMenu';
import DrinkMenu from './pages/menu/DrinkMenu';
import NavBar from './components/NavBar'
import Order from './pages/order/Order'
import Foot from './components/Foot'
import Homepage from './pages/homepage/Homepage'
import AboutUs from './pages/about-us/AboutUs'
import WaiterHub from './pages/waiterHub/WaiterHub';
import ModifyCancelOrder from './pages/waiterHub/ModifyCancelOrder';
import NavBarWaiterHub from './components/waiterHub/NavBarWaiterHub';
import NavBarStaff from './components/login/NavBarStaff';
import NavBarCustomer from './components/login/NavBarCustomer';
import NavBarRegistration from './components/registration/NavBarRegistration';
import NewOrder from './pages/waiterHub/NewOrder';
import KitchenHub from './pages/kitchenHub/KitchenHub'
import NavBarKitchenHub from './components/kitchenHub/NavBarKitchenHub';
import ChangeMenu from './pages/waiterHub/ChangeMenu';
import Tutorial from './pages/waiterHub/Tutorial';

/**Picks which NavBar to display depending on what page is active.
 */
function PickNavBar() {

  const location = useLocation();
  console.log(location);

  switch (location.pathname) {
    case "/WaiterHub":
    case "/ModifyCancelOrder":
    //Waiters Hub NavBar which contains a user icon and link back to main hub page
    case "/NewOrder":
    case "/ChangeMenu":
    case "/Tutorial":
      return <NavBarWaiterHub />;

    case "/KitchenHub":
      return <NavBarKitchenHub />;

    case "/StaffLogin":
      return <NavBarStaff />;

    //Customer Login NavBar which removes Log In buttons from general NavBar
    case "/CustomerLogin":
      return <NavBarCustomer />;

    //Registration NavBar which removes Sign Up butotns from general NavBar
    case "/Registration":
      return <NavBarRegistration />;

    default:
      return <NavBar />;

  }
}


function App() {
  return (
    //Add in the other paths to the other pages
    <div className="App">

      <Router>
        <PickNavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/DrinkMenu" element={<DrinkMenu />} />
          <Route path="/WaiterHub" element={<WaiterHub />} />
          <Route path="/ModifyCancelOrder" element={<ModifyCancelOrder />} />
          <Route path="/NewOrder" element={<NewOrder />} />
          <Route path="/KitchenHub" element={<KitchenHub />} />
          <Route path="/ChangeMenu" element={<ChangeMenu />} />
          <Route path="/Tutorial" element={<Tutorial />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  )
};


export default App
