// router for organizing http requests

const express = require('express');
const controller = require('../controllers/controllers');

const router = express.Router();


router.get(
  '/:wing',
  controller.getFloors,
  (req, res) => res.status(200).json(res.locals.floorData),
);

router.patch(
  '/',
  controller.completeTask,
  (req, res) => res.status(200).json('update successful'),
);


module.exports = router;
