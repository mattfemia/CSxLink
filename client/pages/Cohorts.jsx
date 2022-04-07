import React, { useState } from "react";
import Resident from '../components/Resident';

function Cohorts() {
  const [ residents, setResidents ] = useState([]);
  
  // Get residents
  fetch('/api/resident')
    .then(resData => resData.json())
    .then( (resData) => {
      if (!Array.isArray(resData)) setResidents([]);
      console.log('data: ', resData)
      const residentArray = resData.map( (el, ind) => {
        return (
          <Resident
            key={ind}
            firstName={el.firstname}
            lastName={el.lastname}
            program='NY32'
            linkedin={el.linkedin}
            github={el.github}
          />
        )
      }, []);
      return setResidents(residentArray)
    })
    .catch(err => setResidents([err]));
    console.log('Cohort State ', residents);
    console.log('Cohort State 1', residents[0]);
  

  return (
    <div id="mainContainer">
      <div className='welcome'>RESIDENT PAGE</div>
      {residents}
    </div>
  )
}

export default Cohorts;