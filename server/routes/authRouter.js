const express = require('express');
const authController = require('../controllers/authController');
const residentController = require('../controllers/residentController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

// authorization from gitHub
router.get('/github/auth', async (req, res) => {
  let HOST = 'http://localhost:3000';
  let GITHUB_CLIENT = process.env.GITHUB_CLIENT_DEV;

  if (process.env.NODE_ENV === 'production') {
    HOST = 'https://www.csxlink.com';
    GITHUB_CLIENT = process.env.GITHUB_CLIENT_PRODUCTION;
  }
  const url = `http://github.com/login/oauth/authorize?scope=read:user&redirect_uri=${HOST}/api/auth/github/callback/&client_id=${GITHUB_CLIENT}`;
  return res.redirect(url);
});

// user specific token from gitHub
router.get(
  '/github/callback',
  authController.getToken,
  cookieController.saveToken,
  authController.getAccountInfo,
  residentController.findResident,
  residentController.createResident,
  cookieController.saveUserSession,
  // signupController.storeUserInDb,
  async (req, res) => {
    let HOST;
    (process.env.NODE_ENV === 'production') ? HOST = 'https://www.csxlink.com' : HOST = 'http://localhost:9000';
    if (res.locals.signup) {
      return res.status(200).redirect(`${HOST}/portfolio/update`);
    }
    return res.status(200).redirect(`${HOST}/portfolio`);
  },
);

module.exports = router;
