const db = require('../models/csxlinkModels');

const portfolioController = {};

portfolioController.getPortfolio = async(req, res, next) => {
  const { user_session } = req.cookies;
  try {
    const query = `
      SELECT r.scratch, r.*,  c.cohort AS cohortProgram, c.number AS cohortNumber
      FROM residents r
      INNER JOIN cohorts c
      ON r.program_id=c.program_id 
      WHERE github_node_id=$1
    `;
    const params = [user_session]
    const { rows } = await db.query(query, params);
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
    await db.query(query, params);

    // TODO:
    // Check user's cohort in session data
    // If changed:
      // lookup program_id of new cohort
      // update program_id for user in residents table on user's uuid

  } catch (err) {
    return next(err);
  }
  return next();
};

module.exports = portfolioController;
