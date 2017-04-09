const express = require('express');
const R = require('ramda');
const simpleLogger = require('./simpleLogger');
const redis = require('./redis');

const VERIFY_TOKEN = process.env.FB_VALIDATION || 'suck_1000_dicks_curl_up_and_die';
const router = express.Router();

const validToken = R.propEq('hub.verify_token', VERIFY_TOKEN);
const subscribeMode = R.propEq('hub.mode', 'subscribe');
const validWebhook = R.and(validToken, subscribeMode);
const ip = (req) => req.headers['x-forwarded-for'] || req.connection.remoteAddress;

router.use(simpleLogger('webhookValidation'));

// define the main route
router.get('/', (req, res) => {
  // const ipAddr = ip(req);
  // const valid = validWebhook(req.query) ? 'valid' : 'invalid';

  redis.incrAsync('attempts').then(attempts => console.log({ attempts }));
  if (validWebhook(req.query)) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

module.exports = router;
