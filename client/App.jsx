import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Footer from "./components/Footer"

/*
Pages 
*/
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";
import CohortMembers from "./components/Cohorts/CohortMembers";
import Portfolio from "./pages/Portfolio";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resident from "./pages/Resident";

function App() {
  const [currentUser, setCurrentUser] = useState('Matt');
  
  const renderUserState = () => {
    // Check on-load if user session in session storage
    // TODO

    if (currentUser) {
      return (<Link to='/portfolio'>{currentUser}</Link>);
    }
    return (<Link to='/login'>Login</Link>);
  }
  const { path, url } = useRouteMatch();

  return (
    <div id="bodyContainer">
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
          <Switch>
            <Route exact path={`/cohorts`}>
              <Cohorts />
            </Route>
            <Route path={`/cohorts/:id`}>
              <CohortMembers />
            </Route>
          </Switch>
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
        <Route path='/residents/:id'>
          <Resident />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;