const db = require('../models/csxlinkModels');
import { v4 as uuidv4 } from 'uuid';

const residentController = {};

residentController.getAllResidents = async (req, res, next) => {
  try {
    const query = `
    SELECT * 
    FROM residents`;
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

residentController.findResident = async (req, res, next) => {
  const { id } = res.locals.profile.id;
  try {
    const query = `
    SELECT resident_id
    FROM residents r
    WHERE github_id=$1`;
    const params = [id];
    const { rows } = await db.query(query, params);
    if (rows.length > 0) {
      res.locals.userExists = true;
    }
  } catch (err) {
    return next(err);
  }
  return next();
};

residentController.createResident = async (req, res, next) => {
  if (res.locals.userExists) {
    return res.next();
  }
  const { login, id, node_id, name, location, email} = res.locals.profileInfo;
  const residentId = uuidv4();
  try {
    const query = `
    INSERT INTO residents
    (resident_id, github_id, github_node_id, email, github, firstname, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const params = [residentId, id, node_id, email, login, name, location];
    const { rows } = await db.query(query, params);
    res.locals.signup = true;
  } catch (err) {
    return next(err);
  }
  return next();
};

/*
residentController.deleteResident = async (req, res, next) => {
}

*/

module.exports = residentController;
