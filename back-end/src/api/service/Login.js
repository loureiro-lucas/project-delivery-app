const md5 = require('md5');
const { generateToken } = require('../middleware/jwtAuthentication');

const { users } = require('../../database/models');

async function loginService({ email, password }) {
  const searchUser = await users.sequelize.

  const hashPassword = md5(password);

  if (hashPassword !== searchUser.password) {
    return false;
  }

  const { id, role, name } = searchUser;

  const token = generateToken({ id, email, role });

  const response = {
    user: { id, name, role, email }, token,
  };

  return response;
}

module.exports = loginService;