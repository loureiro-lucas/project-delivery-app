const md5 = require('md5');
const { user } = require('../../database/models');
const { generateToken } = require('../middleware/jwtAuthentication');

async function loginService({ email, password }) {
  const userFound = await user.findOne({ where: { email } });

  if (!searchUser) {
    return false;
  }

  const hashPassword = md5(password);

  if (hashPassword !== userFound.password) {
    return { status: false };
  }

  const { id, role, name } = userFound;

  const token = generateToken({ id, email, role });

  const response = {
    status: true,
    payload: {
    id, name, role, email, token,
    },
  };

  return response;
}

module.exports = loginService;