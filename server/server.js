const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

// Data encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



// Handle webpack build files for production environment deployments 
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
}

app.use('/api', apiRouter);

// 404 route handler
app.use((req, res) => res.status(404).send('The page you\'re looking for doesn\'t exist!'));

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}')
});
