const express = require('express');
const R = require('ramda');
const simpleLogger = require('../helpers/simpleLogger');
const redis = require('../helpers/redis');

const router = express.Router();
router.use(simpleLogger('validate'));

router.get('/location', (req, res) => {
  const { location } = req.params;
  res.send('validate location');
});

router.get('/time', (req, res) => {
  const { time } = req.params;
  res.send('validate time');
});

module.exports = router;
