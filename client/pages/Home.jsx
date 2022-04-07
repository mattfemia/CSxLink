import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { v4 as uuidv4 } from 'uuid';

function Home() {
  // console.log(uuidv4())
  return (
    <div id="mainContainer">

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 20, mb: 2 }} maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Codesmith x Link
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'An internal network to track the Codesmith resident experience and cohort outcomes.'}
          </Typography>
          <Typography variant="body1">
            - Quickly find current and past projects from cohorts
          </Typography>
          <Typography>
            - See where your past cohort-mates work.
          </Typography>
          <Typography>
            - Seek out the support of past residents working at your dream company.
          </Typography>
        </Container>

        <Container component="latest" sx={{ mt: 5, mb: 2 }} maxWidth="md">
          <Typography variant="h5" component="h2" gutterBottom>
            {'Latest News:'}
          </Typography>
          <Typography variant="body1">
            - New York Cohorts questioning the existence of Will Sentence
          </Typography>
          <Typography>
            - Bernie Green reveals favorite color is NOT green.
          </Typography>
          <Typography>
            - NY31 residents on the verge of receiving large paychecks
          </Typography>
          <Typography>
            - Eric "Eyeballs" Rodgers celebrates birthday
          </Typography>
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              (theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800]),
          }}
        />
      </Box>
    </div>
  );
}

export default Home;