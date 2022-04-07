const db = require('../models/csxlinkModels');

const residentController = {};

residentController.getResidents = async (req, res, next) => {
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
residentController.createResident = async (req, res, next) => {
  
}
residentController.deleteResident = async (req, res, next) => {

}
residentController.updateResident = async (req, res, next) => {

}

*/


module.exports = residentController;