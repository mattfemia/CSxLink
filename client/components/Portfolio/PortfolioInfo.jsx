import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// resident_id, firstname, lastname, program_id, linkedin, github, snake_game, chrome_extension, 
// 	solo, iteration, osp_repo, osp_website, osp_article, reinforcement, company_id

function PortfolioInfo(props) {

  return (
    <div style={{ listStyleType: 'none', textAlign: 'center' }}>
      <h2>{props.firstname} {props.lastname}</h2>
      <h4>Cohort {props.cohortProgram} {props.cohortNumber}</h4>
      <h5>{props.linkedin}</h5>
      <h5>{props.github}</h5>
      <h5>Snake Game: {props.snake_game}</h5>
      <h5>Chrome Extension: {props.chrome_extension}</h5>
      <h5>Solo Project: {props.solo}</h5>
      <h5>Iteration: {props.iteration}</h5>
      <h5>OSP Repo: {props.osp_repo}</h5>
      <h5>OSP Website: {props.osp_website}</h5>
      <h5>OSP Article: {props.osp_article}</h5>
      <h5>Reinforcement: {props.reinforcement}</h5>
    </div>
  );
}


export default PortfolioInfo;