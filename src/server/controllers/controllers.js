// build middleware here

// require in model so that database queries can be performed
const db = require('../models/models');

const controller = {};

controller.getFloors = (req, res, next) => {
  const { wing } = req.params;
  // console.log('wing:', wing);

  const queryParams = [wing];

  const selector = 'SELECT * FROM floors WHERE wing = $1 ORDER BY roomnumber';
  db.query(selector, queryParams)
    .then((data) => {
      res.locals.floorData = data.rows;
      next();
    })
    .catch((err) => {
      next({
        log: 'An error occurred in getBuildings',
        status: 500,
        message: { err },
      });
    });
};

controller.completeTask = (req, res, next) => {
  // console.log('req.body: ', req.body);
  const { roomNumber, newStatus, wing } = req.body;

  // paramaterize query and send it
  const queryParams = [roomNumber, newStatus, wing];
  const sqlCommand = 'UPDATE floors SET task = $2 WHERE roomnumber = $1 AND wing = $3';

  db.query(sqlCommand, queryParams)
    .then((data) => {
      next();
    })
    .catch((err) => next({
      log: 'An error occurred in the sql query of controller.completeTask',
      status: 500,
      message: { err },
    }));
};

module.exports = controller;
