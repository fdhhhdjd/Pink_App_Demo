'use strict';

//* LIB
const crypto = require('crypto');

//* Random token link check email and reset password
const generateResetToken = (length = 30) => {
  const token = crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
  return token;
};

//* Random Device Id for every device
const generateDeviceID = ({ length = 10 }) => {
  const randomString = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('sha256').update(randomString).digest('hex');
  return hash.substring(0, length);
};

//* Random password
const generateRandomPassword = ({ lengthPassword }) => {
  const bytesNeeded = Math.ceil((lengthPassword * 3) / 4);

  const randomBytesBuffer = crypto.randomBytes(bytesNeeded);

  const randomHex = randomBytesBuffer.toString('hex');

  return randomHex.slice(0, lengthPassword);
};

module.exports = { generateResetToken, generateDeviceID, generateRandomPassword };
