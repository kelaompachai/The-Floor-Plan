// build middleware here

// require in model so that database queries can be performed
const db = require('../models/models');

const controller = {};

controller.getFloors = (req, res, next) => {
  // console.log('got here');

  const selector = 'SELECT * FROM floors;';
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

// ('110', 'done', 'KEG1', 'Ketler'),


module.exports = controller;
