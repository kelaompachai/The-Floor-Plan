// router for organizing http requests

const express = require('express');
const controller = require('../controllers/controllers');

const router = express.Router();


router.get(
  '/',
  controller.getFloors,
  (req, res) => res.status(200).json(res.locals.floorData),
);













module.exports = router;