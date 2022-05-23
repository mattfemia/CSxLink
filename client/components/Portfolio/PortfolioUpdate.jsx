/* eslint-disable array-bracket-spacing */
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

function PortfolioUpdate() {
  const [ firstname, setFirstName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ cohortProgram, setCohortProgram ] = useState('');
  const [ cohortNumber, setCohortNumber ] = useState('');
  const [ github, setGithub ] = useState('');
  const [ linkedin, setLinkedin ] = useState('');
  const [ snakeGame, setSnakeGame ] = useState('');
  const [ chromeExtension, setChromeExtension ] = useState('');
  const [ solo, setSolo ] = useState('');
  const [ scratch, setScratch ] = useState('');
  const [ iteration, setIteration ] = useState('');
  const [ ospRepo, setOspRepo ] = useState('');
  const [ ospWebsite, setOspWebsite ] = useState('');
  const [ ospArticle, setOspArticle ] = useState('');
  const [ reinforcement, setReinforcement ] = useState('');

  const [ saveClicked, setSaveClicked ] = useState(false);

  // GET active user's portfolio
  useEffect(() => {
    let isRequestSubscribed = true;
    fetch('/api/portfolio')
      .then( (resData) => resData.json())
      .then( (resData) => {
        if (isRequestSubscribed) {
          resData.forEach((el, ind) => {
            setFirstName(el.firstname || ' ');
            setLastName(el.lastname || ' ');
            setCohortProgram(el.cohortprogram || ' ');
            setCohortNumber(el.cohortnumber || ' ');
            setGithub(el.github || ' ');
            setLinkedin(el.linkedin || ' ');
            setSnakeGame(el.snake_game || ' ');
            setChromeExtension(el.chrome_extension || ' ');
            setSolo(el.solo || ' ');
            setScratch(el.scratch || ' ');
            setIteration(el.iteration || ' ');
            setOspRepo(el.osp_repo || ' ');
            setOspWebsite(el.osp_website || ' ');
            setOspArticle(el.osp_article || ' ');
            setReinforcement(el.reinforcement || ' ');
          });
        }
      })
      .catch( (err) => console.log(err));
    return () => {
      isRequestSubscribed = false;
    }
  }, []);

  // const saveProfile = () => {
  useEffect(() => {
    if (saveClicked) {
      console.log("Save Clicked")
      const reqBody = {
        firstname,
        lastname,
        cohortProgram,
        cohortNumber,
        github,
        linkedin,
        snakeGame,
        chromeExtension,
        solo,
        scratch,
        iteration,
        ospRepo,
        ospWebsite,
        ospArticle,
        reinforcement,
      };
      fetch('/api/portfolio', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: new URLSearchParams(reqBody),
      })
        .then((res) => {
          console.log(res.status)
          if (res.status === 200) {
            console.log('Profile updated.');
          } else {
            alert('An error occurred saving message. Please try again later.');
          }
        });
    }
    setSaveClicked(false);
  }, [saveClicked])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* Personal Info */}
        <Grid item xs={4}>
          <TextField
            id="firstname"
            label="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="lastname"
            label="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="programLabel">Program</InputLabel>
            <Select
              id="cohortProgram"
              label="Program"
              value={cohortProgram}
              onChange={(e) => setCohortProgram(e.target.value)}
              fullWidth
            >
              <MenuItem value='NY'>NY</MenuItem>
              <MenuItem value='LA'>LA</MenuItem>
              <MenuItem value='FTRI'>FTRI</MenuItem>
              <MenuItem value='PTRI'>PTRI</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="cohortNumber"
            label="Cohort Number"
            value={cohortNumber}
            onChange={(e) => setCohortNumber(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Social Links */}
        <Grid item xs={6}>
          <TextField
            id="github"
            label="Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="linkedin"
            label="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* First Projects */}
        <Grid item xs={4}>
          <TextField
            id="snake"
            label="Snake Game"
            value={snakeGame}
            onChange={(e) => setSnakeGame(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="chrome"
            label="Chrome Extension"
            value={chromeExtension}
            onChange={(e) => setChromeExtension(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="solo"
            label="Solo Project"
            value={solo}
            onChange={(e) => setSolo(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Projects */}
        <Grid item xs={4}>
          <TextField
            id="scratch"
            label="Scratch Project"
            value={scratch}
            onChange={(e) => setScratch(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="iteration"
            label="Iteration Project"
            value={iteration}
            onChange={(e) => setIteration(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="reinforcement"
            label="Reinforcement Project"
            value={reinforcement}
            onChange={(e) => setReinforcement(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* OSP */}
        <Grid item xs={4}>
          <TextField
            id="osp"
            label="OSP Repo"
            value={ospRepo}
            onChange={(e) => setOspRepo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="ospWebsite"
            label="OSP Website"
            value={ospWebsite}
            onChange={(e) => setOspWebsite(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="ospArticle"
            label="OSP Article"
            value={ospArticle}
            onChange={(e) => setOspArticle(e.target.value)}
            fullWidth
          />
        </Grid>


      </Grid>
      <Button
        sx={{mt: 2}}
        variant="contained"
        color="success"
        size="large"
        onClick={() => setSaveClicked(true)}
      >
        Update
      </Button>
    </Box>
  );
}

export default PortfolioUpdate;

// <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

// <form noValidate autoComplete="off" method="PUT" onSubmit={handleSubmit}>

//   <FormControl fullWidth sx={{ m: 1, width: '50ch' }} variant="filled">
//     <InputLabel htmlFor="filled-adornment-amount">LinkedIn Profile</InputLabel>
//     <FilledInput
//       id="filled-adornment-weight"
//       variant="filled"
//     />
//     <FormHelperText id="filled-weight-helper-text">LinkedIn</FormHelperText>
//   </FormControl>
//   <FormControl fullWidth sx={{ m: 1, width: '50ch' }} variant="filled">
//     <InputLabel htmlFor="filled-adornment-amount">GitHub Profile</InputLabel>
//     <FilledInput
//       id="filled-adornment-weight"
//       variant="filled"
//     />
//     <FormHelperText id="filled-weight-helper-text">GitHub</FormHelperText>
//   </FormControl>
//   <FormControl fullWidth sx={{ m: 1, width: '50ch' }} variant="filled">
//     <InputLabel htmlFor="filled-adornment-amount">LinkedIn Profile</InputLabel>
//     <FilledInput id="filled-adornment-weight" variant="filled" />
//     <FormHelperText id="filled-weight-helper-text">LinkedIn</FormHelperText>
//   </FormControl>
//   <Button size="large" sx={{ m: 1 }} variant="outlined" onClick={handleSubmit}>Submit</Button>
// </form>


// </Box>