import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './Pages/login/CustomerLogin';
import StaffLogin from './Pages/login/StaffLogin';
import Registration from './Pages/registration/Registration';
import FoodMenu from './Pages/menu/FoodMenu';
import NavBar from './components/NavBar';
import Order from './Pages/order/Order'
import DrinkMenu from './Pages/menu/DrinkMenu'


function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <div class="fixed top-0 z-20 w-full">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<StaffLogin />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/DrinkMenu" element={<DrinkMenu />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App
