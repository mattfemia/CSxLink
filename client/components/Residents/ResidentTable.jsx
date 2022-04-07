import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(firstname, lastname, programId, linkedin, github, snakeGame, 
  chromeExtension, solo, iteration, ospRepo, ospWebsite, ospArticle, reinforcement, 
  companyId, cohortProgram, cohortNumber) {
  return {
    firstname,
    lastname,
    programId,
    linkedin,
    github,
    snakeGame,
    chromeExtension,
    solo,
    iteration,
    ospRepo,
    ospWebsite,
    ospArticle,
    reinforcement,
    companyId,
    cohortProgram,
    cohortNumber,
  };
}

const rows = [
  // getResidents
];

// resident_id, firstname, lastname, program_id, linkedin, github, snake_game, chrome_extension, 
// 	solo, iteration, osp_repo, osp_website, osp_article, reinforcement, company_id

function ResidentTable(props) {

  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right">  </TableCell>
    //         <TableCell align="right">  </TableCell>
    //         <TableCell align="right">  </TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.}</TableCell>
    //           <TableCell align="right">{row.}</TableCell>
    //           <TableCell align="right">{row.}</TableCell>
    //           <TableCell align="right">{row.}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}


export default ResidentTable;