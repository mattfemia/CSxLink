import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import PortfolioInfo from '../components/Portfolio/PortfolioInfo';
import PortfolioUpdate from '../components/Portfolio/PortfolioUpdate';

function Portfolio() {
  const [ profileInfo, setProfileInfo ] = useState();

  // GET current user's portfolio
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch('/api/portfolio')
      .then( (resData) => resData.json())
      .then( (resData) => {
        if (isRequestSubscribed) {
          if (!Array.isArray(resData)) setProfileInfo([]);
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
          return setProfileInfo(portfolioList);
        }
      })
      .catch( (err) => setProfileInfo([err]));

    return () => {
      isRequestSubscribed = false;
    }
  }, []);
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div id='mainContainer'>

      <div style={{ padding: '10px '}}>
        <Link className="cohortLink" to={`${url}`}>View</Link>
        <Link className="cohortLink" to={`${url}/update`}>Update</Link>
      </div>

        <Switch>
          <Route exact path={path}>
            <h1 className="welcome">PORTFOLIO</h1>
            {profileInfo}
          </Route>
          <Route path={`${path}/update`}>
            <h1 className="welcome">Update</h1>
            <PortfolioUpdate />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default Portfolio;
