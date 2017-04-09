const express = require('express');
const client = require('./helpers/redis');

const PORT = process.env.PORT || 8080;
const app = express();

// Routes
const webhookValidation = require('./routes/webhookValidation');
const createUser = require('./routes/createUser');

// Middleware
app.use('/webhookValidation', webhookValidation);
app.use('/createUser', createUser);

// Start
app.listen(PORT);
