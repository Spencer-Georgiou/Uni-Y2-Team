import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './Pages/login/CustomerLogin';
import StaffLogin from './Pages/login/StaffLogin';
import Registration from './Pages/registration/Registration';
import FoodMenu from './Pages/menu/FoodMenu';
import DrinkMenu from './Pages/menu/DrinkMenu';


function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DrinkMenu />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/DrinkMenu" element={<FoodMenu />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App
