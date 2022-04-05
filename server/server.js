const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static(__dirname)); //serves the index.html

app.get('/', (req, res) => {
  res.status(200).send('Codesmith Solo Project');
})

app.listen(PORT, () => {
  console.log('`Server listening on port: ${PORT}')
})
