'use strict';

const { BadRequestRequestError } = require('../../../cores/error.response');
const { comparePassword } = require('../../../helpers/hashPassword');
const { createToken } = require('../../../helpers/token');
const UserModels = require('../models/users.model');

class AuthService {
  static async login(req) {
    if (!req.body) {
      throw new BadRequestRequestError('fields is required');
    }

    if (!req.body.email) {
      throw new BadRequestRequestError('Email is required');
    }

    if (!req.body.password) {
      throw new BadRequestRequestError('Password is required');
    }

    const resultUser = await UserModels.getInfoUser({ email: req.body.email }, [
      'id',
      'password',
      'role',
    ]);

    if (!resultUser) {
      throw new BadRequestRequestError('Email not found');
    }

    const checkHashPassword = await comparePassword({
      password: req.body.password,
      passwordHash: resultUser.password,
    });

    if (!checkHashPassword) {
      throw new BadRequestRequestError('Password Wrong');
    }

    const accessToken = await createToken({
      id: resultUser?.id,
      role: resultUser?.role,
      email: req.body.email,
    });

    return {
      id: resultUser?.id,
      email: req.body.email,
      access_token: accessToken,
    };
  }

  static async profile(req) {
    const { id } = req.infoAccessToken;

    const resultUser = await UserModels.getInfoUser({ id }, '*');

    if (!resultUser) {
      throw new BadRequestRequestError('User not found');
    }

    return resultUser;
  }
}

module.exports = AuthService;
