import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CohortDetails from '../components/Cohorts/CohortDetails';
import CohortCreatorModal from '../components/Cohorts/CohortCreatorModal';
import CohortMembers from '../components/Cohorts/CohortMembers';

import Button from '@mui/material/Button';

function Cohorts() {
  const [ cohorts, setCohorts ] = useState([]);
  
  // GET cohorts
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch('/api/cohort', {
      mode: 'no-cors',
    })
      .then((resData) => resData.json())
      .then((resData) => {
        if (isRequestSubscribed) {
          if (!Array.isArray(resData)) setCohorts([]);

          if (resData) {
            const cohortsArray = resData.map((el, ind) => (
              <CohortDetails
                key={`key${ind}`}
                cohort={el.cohort}
                number={el.number}
                membership={el.membership}
                start_date={new Date(el.start_date).toLocaleDateString('en-US')}
                end_date={new Date(el.end_date).toLocaleDateString('en-US')}
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
  const { path, url } = useRouteMatch();

  return (
    <div id="mainContainer">
      <div>
        <div style={{ padding: '10px' }}>
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
