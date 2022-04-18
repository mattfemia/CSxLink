const db = require('../models/csxlinkModels');

const portfolioController = {};

portfolioController.getPortfolio = async(req, res, next) => {
  // const { id } = req.body;
  try {
    const query = `
      SELECT r.scratch, r.*,  c.cohort AS cohortProgram, c.number AS cohortNumber
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

portfolioController.updatePortfolio = async (req, res, next) => {
  const {
    firstname,
    lastname,
    cohortProgram,
    cohortNumber,
    github,
    linkedin,
    snakeGame,
    chromeExtension,
    solo,
    scratch,
    iteration,
    ospRepo,
    ospWebsite,
    ospArticle,
    reinforcement,
  } = req.body;
  try {
    const query = `
      UPDATE residents
      SET firstname=$1, lastname=$2, linkedin=$4, github=$3, snake_game=$5,
      chrome_extension=$6, solo=$7, scratch=$8, iteration=$9, osp_repo=$10,
      osp_website=$11, osp_article=$12, reinforcement=$13
      WHERE resident_id='22f5130c-f057-428c-b93c-ff82b9974bfe'
    `;
    const params = [
      firstname,
      lastname,
      github,
      linkedin,
      snakeGame,
      chromeExtension,
      solo,
      scratch,
      iteration,
      ospRepo,
      ospWebsite,
      ospArticle,
      reinforcement,
    ];
    const { rows } = await db.query(query, params);
    console.log('Updated profile server side.')
  } catch (err) {
    return next(err);
  }
  return next();
};

module.exports = portfolioController;
