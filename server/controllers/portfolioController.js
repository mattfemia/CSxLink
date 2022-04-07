const db = require('../models/csxlinkModels');

const portfolioController = {};

portfolioController.getPortfolio = async(req, res, next) => {
  // const { id } = req.body;
  try {
    const query = `
      SELECT r.*,  c.cohort AS cohortProgram, c.number AS cohortNumber
      FROM residents r
      INNER JOIN cohorts c
      ON r.program_id=c.program_id WHERE resident_id='22f5130c-f057-428c-b93c-ff82b9974bfe'
    `;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

/*
portfolioController.updatePortfolio = async (req, res, next) => {

}

*/


module.exports = portfolioController;
