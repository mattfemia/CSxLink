import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Container from "./components/MainContainer";
import Footer from "./components/Footer"

/*
Pages 
*/
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";
import Portfolio from "./pages/Portfolio";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [currentUser, setCurrentUser] = useState();
  
  const renderUserState = () => {
    // Check on-load if user session in session storage
    // TODO

    if (currentUser) {
      return ( <Link to='/profile'>{currentUser}</Link>)
    }
    return ( <Link to='/login'>Login</Link>)
  }

  return (
    <div>
      <ul className="navbar">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/search'>Search</Link>
        </li>
        <li className="nav-item">
          <Link to='/cohorts'>Cohorts</Link>
        </li>
        <li className="nav-item">
          <Link to='/portfolio'>Portfolio</Link>
        </li>

        <div className="nav-item login">
          <li className="nav-item">
            {renderUserState()}
          </li>
        </div>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cohorts'>
          <Cohorts />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;