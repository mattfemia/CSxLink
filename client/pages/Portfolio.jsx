import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Button from '@mui/material/Button';
import PortfolioInfo from '../components/Portfolio/PortfolioInfo';

function Portfolio() {
  const [ profileInfo, setProfileInfo ] = useState();

  // GET cohorts
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch('/api/portfolio')
      .then( (resData) => resData.json())
      .then( (resData) => {
        if (isRequestSubscribed) {
          if (!Array.isArray(resData)) setProfileInfo([]);
          console.log('data: ', resData)
          const portfolioList = resData.map((el, ind) => (
            <PortfolioInfo
              key={`key${ind}`}
              firstname={el.firstname}
              lastname={el.lastname}
              cohortProgram={el.cohortprogram}
              cohortNumber={el.cohortnumber}
              github={el.github}
              linkedin={el.linkedin}
              snake_game={el.snake_game}
              chrome_extension={el.chrome_extension}
              solo={el.solo}
              iteration={el.iteration || "No iteration project yet!"}
              osp_repo={el.osp_repo || "No OSP repo yet!"}
              osp_website={el.osp_website || "No OSP website yet!"}
              osp_article={el.osp_article || "No OSP Article yet!"}
              reinforcement={el.reinforcement || "No Reinforcement project yet!"}
            />
          ));
          return setProfileInfo(portfolioList);
        }
      })
      .catch( (err) => setProfileInfo([err]));

    return () => {
      isRequestSubscribed = false;
    }
  }, []);

  return (
    <div>
      <div id='mainContainer'>
        <h1 className='welcome'>RESIDENT PORTFOLIO</h1>
        {profileInfo}
      </div>
    </div>
  );
}

// const [ cohorts, setCohorts ] = useState([]);
  
// // GET cohorts
// useEffect(() => {
//   let isRequestSubscribed = true;
//   fetch('/api/cohort')
//     .then( (resData) => resData.json())
//     .then( (resData) => {
//       if (isRequestSubscribed) {
//         if (!Array.isArray(resData)) setCohorts([]);
//         console.log('data: ', resData)
//         const cohortsArray = resData.map((el, ind) => (
//           <CohortInfo
//             key={`key${ind}`}
//             cohort={el.cohort}
//             number={el.number}
//             start_date={el.start_date}
//             end_date={el.end_date}
//           />
//         ));
//         return setCohorts(cohortsArray);
//       }
//     })
//     .catch( (err) => setCohorts([err]));

//   return () => {
//     isRequestSubscribed = false;
//   }
// }, []);



export default Portfolio;
