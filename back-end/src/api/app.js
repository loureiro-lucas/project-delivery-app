const express = require('express');
const routerLogin = require('./routes');

const error = require('./middleware/globalError');

const app = express();
app.use(express.json());
app.use(routerLogin);

app.use(error);
module.exports = app;
