const md5 = require('md5');
const registerAdminService = require('../service/RegisterAdmin');

async function registerController(req, res, next) {
  try {
    const { name, email, password, role } = req.body;
    const hashPassword = md5(password);

    const registeredUser = await registerAdminService({ name, email, hashPassword, role });
    
    if (!registeredUser) {
      return res.status(409).json({ message: 'Customer already exists' });
    }

    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    next(error);
  }
}

module.exports = registerController;