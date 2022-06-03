const express = require('express');
const routerLogin = require('./routes');
const routerRegister = require('./routes/Register');

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
app.use(routerLogin);
app.use(routerRegister);

app.use(error);
module.exports = app;
