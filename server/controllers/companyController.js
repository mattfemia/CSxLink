const db = require('../models/csxlinkModels');

const companyController = {};

companyController.getCompanies = async(req, res, next) => {
  try {
    const query = `SELECT * FROM companies`;
    const { rows } = await db.query(query, null);
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};

/*
companyController.createCompany = async (req, res, next) => {
  
}
companyController.deleteCompany = async (req, res, next) => {

}
companyController.updateCompany = async (req, res, next) => {

}

*/


module.exports = companyController;
