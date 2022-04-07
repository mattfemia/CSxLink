import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CohortInfo from '../components/Cohorts/CohortInfo';

/* MUI */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Cohorts() {
  const [ cohorts, setCohorts ] = useState([]);

  // GET cohorts
  useEffect(() => {
    fetch('/api/cohort')
      .then( (resData) => resData.json())
      .then( (resData) => {
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
      })
      .catch( (err) => setCohorts([err]));
  }, []);

  let { path, url } = useRouteMatch();
  return (

    <div id="mainContainer">

      <Switch>
        <Route path={path}>
          <h1 className="welcome">VIEW COHORTS PAGE</h1>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">View Cohorts</Button>
            <Button variant="contained" color="success"><Link to={`${url}/create`}>Add Cohort</Link></Button>
            <Button variant="contained" color="secondary">Update</Button>
          </Stack>
          {cohorts}
        </Route>
        <Route path={`${path}/create`}>
          <li className="">
            <Link to={`${url}`}>View Cohorts</Link>
          </li>
          <h1 className="welcome">CREATE COHORTS PAGE</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Cohorts;
