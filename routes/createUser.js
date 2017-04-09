const express = require('express');
const R = require('ramda');
const simpleLogger = require('../helpers/simpleLogger');
const redis = require('../helpers/redis');

const router = express.Router();
router.use(simpleLogger('createUser'));

router.get('/:id', (req, res) => {
  const { id } = req.params;
  redis.saddAsync('users', id).then(status => {
    if (status == 1) {
      console.log(`Adding user ${id} to redis`);
      res.sendStatus(201); // "Created"
    } else {
      console.error(`User ${id} already in redis`);
      res.sendStatus(204); // "No Content"
    }

  });
});

module.exports = router;
