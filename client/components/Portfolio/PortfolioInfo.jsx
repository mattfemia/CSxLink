import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// resident_id, firstname, lastname, program_id, linkedin, github, snake_game, 
// chrome_extension, solo, scratch iteration, osp_repo, osp_website, 
// osp_article, reinforcement, company_id

function PortfolioInfo(props) {

  return (
    <div style={{ listStyleType: 'none', textAlign: 'center' }}>
      <h1>{props.firstname} {props.lastname}</h1>
      <h2>
        {/* <span>Cohort: </span> */}
        { (props.cohortProgram) ? <a href={`/cohorts/${props.cohortProgram}-${props.cohortNumber}`}>{props.cohortProgram} {props.cohortNumber} </a> : " Cohort Not Provided"}
      </h2>
      <h5>
        { (props.linkedin) ? <a href={props.linkedin}>LinkedIn</a> : " LinkedIn Link Not Provided"}
      </h5>
      <h5>
        { (props.github) ? <a href={props.github}>Github</a> : " Github Link Not Provided"}
      </h5>
      <h5>
        {/* Snake Game: */}
        { (props.snake_game) ? <a href={props.snake_game}>Snake Game</a> : " Solo Project Unavailable"}
      </h5>
      <h5>
        {/* Chrome Extension:  */}
        { (props.chrome_extension) ? <a href={props.chrome_extension}>Chrome Extension</a> : " Chrome Extension Unavailable"}
      </h5>
      <h5>
        {/* Solo Project:  */}
        { (props.solo) ? <a href={props.solo}>Solo Project</a> : " Solo Project Unavailable"}
      </h5>
      <h5>
        {/* Scratch Project: */}
        { (props.scratch) ? <a href={props.scratch}>Scratch Project</a> : " Scratch Project Unavailable"}
      </h5>
      <h5>
        {/* Iteration: */}
        { (props.iteration) ? <a href={props.iteration}>Iteration Project</a> : " Iteration Project Unavailable"}
      </h5>
      <h5>
        {/* OSP Repo:  */}
        { (props.osp_repo) ? <a href={props.osp_repo}>OSP Repo</a> : " OSP Repo Unavailable"}
      </h5>
      <h5>
        {/* OSP Website:  */}
        { (props.osp_website) ? <a href={props.osp_website}>OSP Website</a> : " OSP Website Unavailable"}
      </h5>
      <h5>
        {/* OSP Article:  */}
          { (props.osp_article) ? <a href={props.osp_article}></a> : " OSP Article Unavailable"}
        </h5>
      <h5>
        {/* Reinforcement: */}
        { (props.reinforcement) ? <a href={props.reinforcement}></a> : " Reinforcement Project Unavailable"}
      </h5>
    </div>
  );
}


export default PortfolioInfo;