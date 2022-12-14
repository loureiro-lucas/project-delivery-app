const loginService = require('../service/Login');

async function loginController(req, res, next) {
  try {
    const { email, password } = req.body;

    const result = await loginService({ email, password });
    
    if (!result) {
      return res.status(404).json({ message: 'Incorrect email or password' });
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = loginController;