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
          if (resData){
            const cohortsArray = resData.map((el, ind) => (
              <CohortInfo
                key={`key${ind}`}
                cohort={el.cohort}
                number={el.number}
                membership={el.membership}
                start_date={el.start_date}
                end_date={el.end_date}
              />
            ));
            return setCohorts(cohortsArray);
          }
        }
      })
      .catch( (err) => setCohorts([err]));

    return () => {
      isRequestSubscribed = false;
    };
  }, []);
  let { path, url } = useRouteMatch();

  return (
    <div id="mainContainer">
      <div>
        <div style={{ padding: '10px '}}>
          <Link className="cohortLink" to={`${url}`}>View</Link>
          <Link className="cohortLink" to={`${url}/create`}>Create</Link>
          <Link className="cohortLink" to={`${url}/update`}>Update</Link>
        </div>

        <Switch>
          <Route exact path={path}>
            <h1 className="welcome">VIEW COHORTS</h1>
            {cohorts}
          </Route>
          <Route path={`${path}/create`}>
            <h1 className="welcome">CREATE COHORT</h1>
            <CohortCreatorModal />
          </Route>
          <Route path={`${path}/update`}>
            <h1 className="welcome">UPDATE COHORT</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Cohorts;
