const { user } = require('../../database/models');

async function registerService({ email, name, password }) {
  const userAlreadyExist = await user.findOne({ where: { email, name } });

  if (userAlreadyExist) {
    return false;
  }

  const createdUser = await user.create({ email, name, password, role: 'customer' });

  return createdUser;
}

module.exports = registerService;