import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioInfo from '../components/Portfolio/PortfolioInfo';

function Resident() {
  const { id } = useParams();
  console.log(id);
  const [ residentProfile, setResidentProfile ] = useState(<div>Exists</div>);

  // GET cohort members
  useEffect(() => {
    let isRequestSubscribed = true;

    if (!id) {
      setResidentProfile(
        <div>
          <h1>Page does not exist</h1>
        </div>,
      );
    } else {
      fetch(`/api/resident/${id}`, {
        mode: 'no-cors',
      })
      .then((resData) => resData.json())
      .then((resData) => {
        if (isRequestSubscribed) {
          console.log(resData);
          if (!Array.isArray(resData)) setResidentProfile([]);
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
              scratch={el.scratch}
              iteration={el.iteration}
              osp_repo={el.osp_repo}
              osp_website={el.osp_website}
              osp_article={el.osp_article}
              reinforcement={el.reinforcement}
            />
          ));
          return setResidentProfile(portfolioList);
        }
      })
      .catch( (err) => setResidentProfile([err]));
    }

    return () => {
      isRequestSubscribed = false;
    };
  }, []);


  return(
    <div id='mainContainer'>
      {residentProfile}
    </div>
  )
}

export default Resident;