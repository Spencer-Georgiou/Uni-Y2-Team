import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerLogin from './Pages/Login/CustomerLogin';
import StaffLogin from './Pages/Login/StaffLogin';
import Homepage from './Pages/Homepage/Homepage';



function App() {
  return (
    //add in the other paths to the other pages
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App
