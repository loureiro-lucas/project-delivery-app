const { user } = require('../../database/models');

async function registerAdminService({ name, email, hashPassword, role }) {
  const createdUser = await user.create({ name, email, password: hashPassword, role });

  return createdUser;
}

module.exports = registerAdminService;