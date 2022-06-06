const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtSecret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfig = { expiresIn: '20d', algorithm: 'HS256' };

  function generateToken({ id, email, role }) {
    return jwt.sign({ id, email, role }, jwtSecret, jwtConfig);
  }

  function verifyToken(token) {
    try { 
      const payload = jwt.verify(token, jwtSecret);
  
      return payload;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  module.exports = {
    generateToken,
    verifyToken,
  };