import React from 'react';

function CohortInfo(props) {
  return (
    <ul>
      <a href="#">Members</a>
      <li>{props.cohort} {props.number}</li>
      <li>{props.start_date}</li>
      <li>{props.start_date}</li>
      <li>{props.membership}</li>
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