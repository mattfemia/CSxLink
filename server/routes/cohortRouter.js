const express = require('express');
const cohortController = require('../controllers/cohortController');
const router = express.Router();

router.get('/', cohortController.getCohorts, (req, res) => {
  res.json(res.locals.data);
});

router.post('/', (req, res) => {
  // TODO
});

router.patch('/', (req, res) => {
  // TODO
});

router.delete('/', (req, res) => {
  // TODO
});

module.exports = router;