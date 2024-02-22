import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './pages/login/CustomerLogin';
import StaffLogin from './pages/login/StaffLogin';
import Registration from './pages/registration/Registration';
import FoodMenu from './pages/menu/FoodMenu';
import NavBar from './components/NavBar';


function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StaffLogin />} />
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
