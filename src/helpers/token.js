const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.TOKEN_SECRET; // Replace this with your actual secret key

const createToken = async payload => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1y' }); // Token expires in 1 year
};

const verifyToken = token => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = { createToken, verifyToken };
