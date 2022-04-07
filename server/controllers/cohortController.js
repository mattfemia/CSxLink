const db = require('../models/csxlinkModels');

const cohortController = {};

cohortController.getCohorts = async(req, res, next) => {
  try {
    const query = `SELECT * FROM residents`;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

/*
cohortController.createCohort = async (req, res, next) => {
  
}
cohortController.deleteCohort = async (req, res, next) => {

}
cohortController.updateCohort = async (req, res, next) => {

}

*/


module.exports = cohortController;