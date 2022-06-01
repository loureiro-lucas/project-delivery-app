const md5 = require('md5');
const { user } = require('../../database/models');
const { generateToken } = require('../middleware/jwtAuthentication');

async function loginService({ email, password }) {
  const searchUser = await user.findOne({ where: { email } });

  const hashPassword = md5(password);

  if (hashPassword !== searchUser.password) {
    return false;
  }

  const { id, role, name } = searchUser;

  const token = generateToken({ id, email, role });

  const response = {
    id, name, role, email, token,
  };

  return response;
}

module.exports = loginService;