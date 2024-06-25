const bcrypt = require('bcrypt');

const { BadRequestRequestError } = require('../cores/error.response');

// Hash password
const hashPassword = async ({ password, saltRounds = 10 }) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return {
      salt,
      hashedPassword,
    };
  } catch (error) {
    throw new BadRequestRequestError();
  }
};

const comparePassword = async ({ password, passwordHash }) => {
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch (error) {
    throw new BadRequestRequestError();
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};
