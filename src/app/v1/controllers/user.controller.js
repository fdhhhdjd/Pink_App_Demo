'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const AuthService = require('../services/auth.service');

class UserControllers {
  async getProfile(req, res, __) {
    new Ok({
      metadata: await AuthService.profile(req),
    }).send(res);
  }
}

module.exports = new UserControllers();
