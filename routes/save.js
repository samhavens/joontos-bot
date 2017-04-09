const express = require('express');
const R = require('ramda');
const simpleLogger = require('../helpers/simpleLogger');
const redis = require('../helpers/redis');

const router = express.Router();
router.use(simpleLogger('save'));

router.get('/destination', (req, res) => {
  const { id, location } = req.params;
  res.send('saved destination');
});

router.get('/departure/location', (req, res) => {
  const { id, location } = req.params;
  res.send('saved departure location');
});

router.get('/departure/time', (req, res) => {
  const { id, time } = req.params;
  res.send('saved departure location');
});

module.exports = router;
