const express = require('express');
const registerController = require('../controller/Register');

const router = express.Router();

router.post(
  '/register',
  registerController,
);

module.exports = router;