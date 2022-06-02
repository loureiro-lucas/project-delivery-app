const express = require('express');

const loginRouter = require('./routes');

const error = require('./middleware/globalError');

const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(error);

module.exports = app;
