const db = require('../models/csxlinkModels');

const cohortController = {};

cohortController.getCohorts = async (req, res, next) => {
  try {
    const query = `
    SELECT COUNT(r.resident_id) AS membership, c.cohort, c.number, c.start_date, c.end_date
    FROM residents r
    INNER JOIN cohorts c
    ON r.program_id=c.program_id
    GROUP BY r.program_id, r.resident_id, c.program_id
    ORDER BY c.number ASC;
    `;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

cohortController.getCohortMembers = async (req, res, next) => {
  const { id } = req.params;
  const [ cohort, number ] = id.split('-');

  try {
    const query = `
    SELECT r.*, c.cohort, c.number
    FROM residents r
    INNER JOIN cohorts c
    ON r.program_id=c.program_id
    WHERE c.cohort=$1 AND c.number=$2;
    `;
    const params = [cohort, number];
    const { rows } = await db.query(query, params);
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