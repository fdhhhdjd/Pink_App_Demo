'use strict';

const { BadRequestRequestError } = require('../../../cores/error.response');
const UserModels = require('../models/users.model');

class UserService {
  static async profile(req) {
    const { id } = req.infoAccessToken;

    const resultUser = await UserModels.getInfoUser({ id }, '*');

    if (!resultUser) {
      throw new BadRequestRequestError('User not found');
    }

    return resultUser;
  }
}

module.exports = UserService;
