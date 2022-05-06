const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Router imports
const authRouter = require('./routes/authRouter');
const residentRouter = require('./routes/residentRouter');
const cohortRouter = require('./routes/cohortRouter');
const companyRouter = require('./routes/companyRouter');
const portfolioRouter = require('./routes/portfolioRouter');

// Data encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// API Routers
app.get('/api', (req, res) => { 
  return res.status(200); 
});
app.use('/api/auth', authRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/resident', residentRouter);
app.use('/api/cohort', cohortRouter);
app.use('/api/company', companyRouter);

// Handle webpack build files for production environment deployments 
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
}

// 404 route handler
app.use((req, res) => res.status(404).send('The page you\'re looking for doesn\'t exist!'));

// Server listener -- default port is 3000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });
