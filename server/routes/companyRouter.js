const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();

router.get('/', companyController.getCompanies, (req, res) => {
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