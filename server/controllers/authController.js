const fetch = require('node-fetch');
require('dotenv').config();

const authController = {};

authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  console.log('Request Token: ', requestToken);

  // Update env vars based on NODE_ENV
  let GITHUB_CLIENT = process.env.GITHUB_CLIENT_DEV;
  let GITHUB_SECRET = process.env.GITHUB_SECRET_DEV;
  if (process.env.NODE_ENV === 'production') {
    GITHUB_CLIENT = process.env.GITHUB_CLIENT_PRODUCTION;
    GITHUB_SECRET = process.env.GITHUB_SECRET_PRODUCTION;
  }

  const url = `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT}&client_secret=${GITHUB_SECRET}&code=${requestToken}&scope=user:read`;
  try {
    const tokenJSON = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
    const token = await tokenJSON.json();
    console.log('Token: ', token);
    console.log('Access Token: ', token.access_token);
    res.locals.access_token = token.access_token;
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getToken Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

authController.getAccountInfo = async (req, res, next) => {
  // console.log('cookies from getProfile', req.cookies)
  const url = 'https://api.github.com/user';
  try {
    const profileInfoJSON = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `token ${res.locals.access_token}`,
      },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
    // console.log('res.locals in getProfile', res.locals.profile)
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getProfile Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = authController;
