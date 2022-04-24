const db = require('../models/csxlinkModels');

const residentController = {};

residentController.getAllResidents = async (req, res, next) => {
  try {
    const query = `SELECT * FROM residents`;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

residentController.getResident = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = `
    SELECT r.scratch, r.*,  c.cohort AS cohortProgram, c.number AS cohortNumber
    FROM residents r
    INNER JOIN cohorts c
    ON r.program_id=c.program_id
    WHERE resident_id=$1`;
    const params = [id];
    const { rows } = await db.query(query, params);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

/*
residentController.createResident = async (req, res, next) => {

}
residentController.deleteResident = async (req, res, next) => {

}
residentController.updateResident = async (req, res, next) => {

}

*/

module.exports = residentController;