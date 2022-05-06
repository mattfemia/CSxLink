import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Container from "./components/MainContainer";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";
import Profile from "./pages/Profile";
import Network from "./pages/Network";

function App() {
  const [currentUser, setCurrentUser] = useState();
  
  // const renderUserState = () => {
  //   // Check on-load if user session in session storage
  //   // TODO

  //   if (currentUser) {
  //     return ( <Link to='/profile'>{currentUser}</Link>)
  //   }
  //   return ( <Link to='/login'>Login</Link>)
  // }

  return (
    <div>

      <ul className="navbar">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/network'>Network</Link>
        </li>
        <li className="nav-item">
          <Link to='/cohorts'>Cohorts</Link>
        </li>
        <li className="nav-item">
          <Link to='/portfolio'>Portfolio</Link>
        </li>

        {/* <div className="nav-item login">
          <li className="nav-item">
            Login
          </li>
        </div> */}

      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route exact path='/cohorts' element={<Cohorts />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
  
    </div>
  )
}

export default App;