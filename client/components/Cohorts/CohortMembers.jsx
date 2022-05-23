import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CohortMembers() {
  const { id } = useParams();
  const [ members, setMembers ] = useState([]);
  
  // GET cohort members
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch(`/api/cohort/${id}`, {
    })
      .then((resData) => resData.json())
      .then((resData) => {
        if (isRequestSubscribed) {
          if (!Array.isArray(resData)) setMembers([]);

          if (resData) {
            const membersArray = resData.map((el, ind) => (
              <p>
                <a href={`/residents/${el.resident_id}`}>{el.firstname} {el.lastname}</a>
              </p>
            ));
            return setMembers(membersArray);
          }
        }
      })
      .catch((err) => setMembers([err]));

    return () => {
      isRequestSubscribed = false;
    };
  }, []);

  return (
    <div>
      <a href="/cohorts">Back</a>
      <h1>
        {id} Members:
      </h1>
      <ul>
        {members}
      </ul>
    </div>
  );
};

export default CohortMembers;
