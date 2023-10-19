// route paths incoming from auth page of app

// require in express and the controllers
const express = require('express');
const authControllers = require('../controllers/authControllers');

// get a router from express
const router = express.Router();

router.post(
  '/signup',
  authControllers.signupController,
  authControllers.setSSIDCookie,
  authControllers.startSession,
  (req, res) => {
    res.redirect('/app.html');
  },
);

router.post(
  '/login',
  authControllers.loginController,
  authControllers.setSSIDCookie,
  authControllers.startSession,
  (req, res) => {
    res.redirect('/app.html');
  },
);


module.exports = router;
