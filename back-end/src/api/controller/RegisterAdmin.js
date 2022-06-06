const md5 = require('md5');
const registerAdminService = require('../service/RegisterAdmin');

async function registerController(req, res, next) {
  try {
    const { name, email, password, role } = req.body;
    const { authorization } = req.headers;
    const hashPassword = md5(password);

    const { status, message } = await 
      registerAdminService({ authorization, name, email, hashPassword, role });

    return res.status(status).json(message);
  } catch (error) {
    next(error);
  }
}

module.exports = registerController;