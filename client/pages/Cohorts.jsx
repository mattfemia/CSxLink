import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CohortInfo from '../components/Cohorts/CohortInfo';
import CohortCreatorModal from '../components/Cohorts/CohortCreatorModal';

import Button from '@mui/material/Button';

function Cohorts() {
  const [ cohorts, setCohorts ] = useState([]);
  
  // GET cohorts
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch('/api/cohort')
      .then( (resData) => resData.json())
      .then( (resData) => {
        if (isRequestSubscribed) {
          if (!Array.isArray(resData)) setCohorts([]);
          console.log('data: ', resData)
          const cohortsArray = resData.map((el, ind) => (
            <CohortInfo
              key={`key${ind}`}
              cohort={el.cohort}
              number={el.number}
              start_date={el.start_date}
              end_date={el.end_date}
            />
          ));
          return setCohorts(cohortsArray);
        }
      })
      .catch( (err) => setCohorts([err]));

    return () => {
      isRequestSubscribed = false;
    }
  }, []);
  let { path, url } = useRouteMatch();
  return (
    <div id="mainContainer">
      <div>
        <h2>COHORTS</h2>
        <ul>
          <li>
            <Link to={`${url}/create`}>Create</Link>
          </li>
          <li>
            <Link to={`${url}/update`}>Update</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>

            <h1 className="welcome">view PAGE</h1>
            {cohorts}
          </Route>
          <Route path={`${path}/create`}>
            <h1 className="welcome">create PAGE</h1>
            <CohortCreatorModal />
          </Route>
          <Route path={`${path}/update`}>
            <h1 className="welcome">update PAGE</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Cohorts;
