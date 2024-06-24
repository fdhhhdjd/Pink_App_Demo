'use strict';

//* LIB
const _ = require('lodash');
const validator = require('validator');

//* REQUIRE
const { BadRequestRequestError } = require('../../../cores/error.response');
const { VALIDATE } = require('../../constants');
const { GENDER } = require('../../constants/users.constants');

class ValidationAuth {
  validateFields(fields) {
    for (const [__, value] of Object.entries(fields)) {
      if (_.isNull(value)) {
        throw new BadRequestRequestError(VALIDATE.IS_EMPTY);
      }

      if (_.isString(value)) {
        if (_.isEmpty(value)) {
          throw new BadRequestRequestError(VALIDATE.IS_EMPTY);
        }
      }
    }
    return this;
  }

  validateEmail(email) {
    if (_.isEmpty(email)) {
      throw new BadRequestRequestError(VALIDATE.IS_EMPTY);
    }
    if (!validator.isEmail(email)) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_EMAIL);
    }
    return this;
  }

  validateDateOfBirth({ dateOfBirth }) {
    if (dateOfBirth && !validator.isDate(dateOfBirth, { format: 'YYYY/MM/DD' })) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_DATE);
    }
    return this;
  }

  validateUsername({ username }) {
    if (username && _.includes(username, ' ')) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_USERNAME);
    }
    return this;
  }

  validateFullname({ fullname }) {
    const MAX_LENGTH = 50;
    if (fullname && !validator.isLength(fullname, { max: MAX_LENGTH })) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_FULLNAME);
    }
    return this;
  }

  validatePhone({ phone }) {
    if (phone && !validator.isMobilePhone(phone, 'vi-VN')) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_PHONE);
    }
    return this;
  }

  validatePassword({ password }) {
    if (
      password &&
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
    ) {
      throw new BadRequestRequestError(VALIDATE.IS_WEEK_PASSWORDS);
    }
    return this;
  }

  validateGender({ gender }) {
    if (![GENDER.FEMALE, GENDER.MALE, GENDER.UNKNOWN].includes(gender)) {
      throw new BadRequestRequestError(VALIDATE.IS_VALID_GENDER);
    }
    return this;
  }
}

module.exports = new ValidationAuth();
