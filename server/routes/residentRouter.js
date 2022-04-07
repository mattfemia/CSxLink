const express = require('express');
const residentController = require('../controllers/residentController');
const router = express.Router();

router.get('/', residentController.getResidents, (req, res) => {
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