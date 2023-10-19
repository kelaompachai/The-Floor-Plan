// middleware for the authentication page of the application

// get access to bcrypt
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');
// get database access through the model
const db = require('../models/models');

// set salt work factor
const SALT_WORK_FACTOR = 12;

const authControllers = {};

authControllers.signupController = (req, res, next) => {
  // put the data sent in into the users database

  const { username, password } = req.body;

  // hash the password, then store the username and hashed password in the database
  bcrypt.hash(password, SALT_WORK_FACTOR)
    .then((data) => {
      const queryParams = [username, data];
      const sqlQuery = 'INSERT INTO users VALUES ($1, $2);';
      db.query(sqlQuery, queryParams)
        .then(() => {
          next();
        })
        .catch((err) => next({
          log: 'An error occurred updating the database in signupController',
          status: 500,
          message: { err },
        }));
    })
    .catch((err) => next({
      log: 'An error occurred encrypting the password in signupController',
      status: 500,
      message: { err },
    }));
};

authControllers.loginController = (req, res, next) => {
  // get password out of database and save it to a constant
  // then run bcrypt compare passing in user given password and database password
  // redirect back to login page if password is incorrect
  // move onto next middleware if it is correct

  const { username, password } = req.body;
  const sqlQuery = 'SELECT password FROM users WHERE username = $1;';
  const queryParams = [username];

  db.query(sqlQuery, queryParams)
    .then((data) => {
      const hashedPassword = data.rows[0].password;
      console.log(hashedPassword);
      bcrypt.compare(password, hashedPassword)
        .then((data2) => {
          if (data2) return next();
          return res.redirect('/');
        })
        .catch((err) => next({
          log: 'An error occurred in bcrypt compare of loginController.',
          status: 500,
          message: { err },
        }));
    })
    .catch((err) => next({
      log: 'An error occurred accessing the database in loginController.',
      status: 500,
      message: { err },
    }));
};

module.exports = authControllers;
