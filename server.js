const express = require('express');
const client = require('./helpers/redis');

const PORT = process.env.PORT || 8080;
const app = express();

// Routes
const webhookValidation = require('./routes/webhookValidation');
const createUser = require('./routes/createUser');
const validate = require('./routes/validate');

// Middleware
app.use('/webhookValidation', webhookValidation);
app.use('/createUser', createUser);
app.use('/validate', validate);

// Start
app.listen(PORT);
