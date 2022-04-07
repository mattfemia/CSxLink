const db = require('../models/csxlinkModels');

const cohortController = {};

cohortController.getCohorts = async (req, res, next) => {
  try {
    const query = `SELECT * FROM cohorts`;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

cohortController.getCohortMembers = async (req, res, next) => {
  try {
    const query = `
    SELECT r.*, c.cohort, c.number
    FROM residents r
    INNER JOIN cohorts c
    ON r.program_id=c.program_id;
    `;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

cohortController.createCohort = async (req, res, next) => {
  return next();
}
/*
cohortController.deleteCohort = async (req, res, next) => {

}
cohortController.updateCohort = async (req, res, next) => {

}

*/

module.exports = cohortController;