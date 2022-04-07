const db = require('../models/csxlinkModels');

const residentController = {};

residentController.getResidents = async(req, res, next) => {
  try {
    const query = `SELECT * FROM residents`;
    const { rows } = await db.query(query, null);
    // console.log(rows)
    res.locals.data = rows;
  } catch (err) {
    return next(err);
  }
  return next();
};



// starWarsController.getCharacters = async (req, res, next) => {
//   // write code here
//   // make async function
//   try {
//     const q = `SELECT p.name, p.mass, p.height, p.gender, s.name AS species, p.birth_year, p.eye_color, p.hair_color, pl.name AS homeworld, p.species_id, p.homeworld_id
//     FROM people p
//     INNER JOIN species s
//     ON p.species_id=s._id
//     INNER JOIN planets pl
//     ON p.homeworld_id=pl._id`;
//     const { rows } = await db.query(q, null);
//     res.locals.rows = rows;
//   } catch (err) {
//     return next(err);
//   }
//   return next();
// };

module.exports = residentController;