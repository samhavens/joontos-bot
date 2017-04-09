const express = require('express');
const simpleLogger = require('../helpers/simpleLogger');
const redis = require('../helpers/redis');

const router = express.Router();
router.use(simpleLogger('createUser'));

// change this to POST
router.get('/id/:id/name/:name/pic/:picUrl', (req, res) => {
  const { id, name, picUrl } = req.params;
  let returnCode = 200;

  // Validation - gotta have an id
  if(id == '') {
    console.log('Bad Request');
    res.sendStatus(400);
    res.end();
    return;
  }

  redis.saddAsync('users', id).then(status => {
    if (status == 1) {
      console.log(`Adding user ${id} to redis`);
      redis.hmsetAsync([`user:${id}`,
        'id', id,
        'name', name,
        'picUrl', picUrl
      ]).then(createStatus => {
        returnCode = createStatus == 1 ? 201 : 204;
        console.log('added user info');
      });
    } else {
      console.error(`User ${id} already in redis`);
      returnCode = 204;
    }
    res.sendStatus(returnCode);
  });
});

module.exports = router;
