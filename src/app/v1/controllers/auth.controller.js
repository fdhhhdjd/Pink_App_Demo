'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const AuthService = require('../services/auth.service');

class AuthControllers {
  async login(req, res, __) {
    new Ok({
      metadata: await AuthService.login(req, res),
    }).send(res);
  }

  async getProfile(req, res, __) {
    new Ok({
      metadata: await AuthService.profile(req),
    }).send(res);
  }
}

module.exports = new AuthControllers();
