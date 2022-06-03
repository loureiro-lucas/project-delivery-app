const registerService = require('../service/Register');

async function registerController(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const registeredUser = await registerService({ name, email, password });

    if (!registeredUser) {
      return res.status(409).json({ message: 'Customer already exists' });
    }

    return res.status(201).json(registeredUser);
  } catch (error) {
    next(error);
  }
}

module.exports = registerController;