const { user } = require('../../database/models');

async function registerService({ name, email, hashPassword }) {
  const userAlreadyExist = await user.findOne({ where: { name, email } });

  if (userAlreadyExist) {
    return false;
  }

  const createdUser = await user.create({ name, email, password: hashPassword, role: 'customer' });

  return createdUser;
}

module.exports = registerService;