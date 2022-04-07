const express = require('express');
const residentController = require('../controllers/residentController');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', residentController.getResidents, (req, res) => {
  return res.json(res.locals.data);
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