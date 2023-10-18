// build middleware here

// require in model so that database queries can be performed
const db = require('../models/models');

const controller = {};

controller.getFloors = (req, res, next) => {
  // console.log('got here');

  const selector = 'SELECT roomnumber, task FROM floors ORDER BY roomnumber';
  db.query(selector)
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
  console.log('req.body: ', req.body);
  const { roomNumber, newStatus } = req.body;

  // paramaterize query and send it
  const queryParams = [roomNumber, newStatus];
  const sqlCommand = 'UPDATE floors SET task = $2 WHERE roomnumber = $1';

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
