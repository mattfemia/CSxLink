const express = require('express');
const cohortController = require('../controllers/cohortController');
const router = express.Router();

router.get('/', cohortController.getCohorts, (req, res) => {
  res.json(res.locals.data);
});

router.get('/:id', cohortController.getCohortMembers, (req, res) => {
  res.json(res.locals.data);
});

router.get('/create', (req, res) => {
  res.json({});
});

router.post('/create', (req, res) => {
  res.redirect('/');
});

router.patch('/', (req, res) => {
  // TODO
});

router.delete('/', (req, res) => {
  // TODO
});

module.exports = router;