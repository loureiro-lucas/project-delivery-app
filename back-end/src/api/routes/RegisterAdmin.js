const express = require('express');
const registerAdminController = require('../controller/RegisterAdmin');

const router = express.Router();

router.post(
  '/admin/register',
  registerAdminController,
);

module.exports = router;