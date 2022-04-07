import React from 'react';

function CohortInfo(props) {
  return (
    <ul>
      <a href="#">Members</a>
      <li>Cohort: {props.cohort} {props.number}</li>
      <li>Start Date: {props.start_date}</li>
      <li>End Date: {props.start_date}</li>
      <li>Resident Count: {props.membership}</li>
    </ul>
  );
}

/*
  - Cohort + Number
  - start_date
  - end_date
  - membership
*/

export default CohortInfo;