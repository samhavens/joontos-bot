const express = require('express');
const R = require('ramda');
const simpleLogger = require('./simpleLogger');
const redis = require('./redis');

const router = express.Router();
router.use(simpleLogger('createUser'));

router.get('/:id', (req, res) => {
  const { id } = req.params;
  redis.saddAsync('users', id).then(status => {
    if (status == 1) {
      console.log(`Adding user ${id} to redis`);
    } else {
      console.error(`User ${id} already in redis`);
    }
    res.sendStatus(200);
  });
});

module.exports = router;
