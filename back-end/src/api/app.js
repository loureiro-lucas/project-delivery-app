const express = require('express');

const loginRouter = require('./routes');

const error = require('./middleware/globalError');

const app = express();

const startConfigs = () => {
  const accessControl = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  };
  app.use(accessControl);
};

app.use(express.json());
startConfigs();
app.use(loginRouter);

app.use(error);

module.exports = app;
