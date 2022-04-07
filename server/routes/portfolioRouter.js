const express = require('express');
// const companyController = require('../controllers/companyController');
const portfolioController = require('../controllers/portfolioController')
const router = express.Router();

router.get('/', portfolioController.getPortfolio, (req, res) => {
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