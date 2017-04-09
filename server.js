const express = require('express');
const client = require('./redis');

const PORT = process.env.PORT || 8080;
const app = express();

// Routes
const webhookValidation = require('./webhookValidation');
const createUser = require('./createUser');

// Middleware
app.use('/webhookValidation', webhookValidation);
app.use('/createUser', createUser);

// Start
app.listen(PORT);
