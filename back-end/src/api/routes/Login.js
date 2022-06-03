const express = require('express');
const loginController = require('../controller/Login');

const router = express.Router();

// Empty Comment to commit

router.post(
  '/login',
  loginController,
);

module.exports = router;