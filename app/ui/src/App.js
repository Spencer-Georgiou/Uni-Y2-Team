import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './Pages/Login/CustomerLogin';
import StaffLogin from './Pages/Login/StaffLogin';
import Registration from './Pages/registration/Registration';
import FoodMenu from './Pages/menu/FoodMenu';


function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FoodMenu />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App
