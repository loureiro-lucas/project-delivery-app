const { user } = require('../../database/models');
const { verifyToken } = require('../middleware/jwtAuthentication');

async function registerAdminService({ authorization, name, email, hashPassword, role }) {
  const convertedToken = verifyToken(authorization);

  const adminValidation = await 
    user.findOne({ where: { email: convertedToken.email, role: convertedToken.role } });
  if (!adminValidation) {
    return { status: 203, message: 'You don\'t have authorization' };
  }

  const userAlreadyExist = await user.findOne({ where: { name, email } });
  if (userAlreadyExist) {
    return { status: 409, message: 'User already exists' };
  }

  await user.create({ name, email, password: hashPassword, role });
  return { status: 201, message: 'User created successfully' };
}

module.exports = registerAdminService;