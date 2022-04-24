import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import CohortMembers from './CohortMembers';

function CohortDetails(props) {
  return (
    <div>

      <a href={`/cohorts/${props.cohort}-${props.number}`}>Members</a>
          <ul>
            <li>Cohort: {props.cohort} {props.number}</li>
            <li>Start Date: {props.start_date}</li>
            <li>End Date: {props.end_date}</li>
            <li>Resident Count: {props.membership}</li>
          </ul>
    </div>
  );
}

export default CohortDetails;
