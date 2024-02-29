import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './pages/login/CustomerLogin';
import StaffLogin from './pages/login/StaffLogin';
import Registration from './pages/registration/Registration';
import FoodMenu from './pages/menu/FoodMenu';
import DrinkMenu from './pages/menu/DrinkMenu';
import WaiterHub from './pages/waiterHub/WaiterHub'
import ModifyCancelOrder from './pages/waiterHub/ModifyCancelOrder'
import NavBar from './components/NavBar'
import Order from './pages/order/Order'
import Foot from './components/Foot'
import Homepage from './pages/homepage/Homepage'
import AboutUs from './pages/about-us/AboutUs'


function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <div class="fixed top-0 z-20 w-full">
          <NavBar />
        </div>

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
        </Routes>
        <Foot />
      </Router>
    </div>
  )
};


export default App
