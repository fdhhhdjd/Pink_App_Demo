'use strict';

//* REQUIRE
const { SuccessResponse, Created } = require('../../../cores/success.response');
const AuthService = require('../services/auth.service');

class AuthControllers {
  async register(req, res, __) {
    new Created({
      metadata: await AuthService.register(req),
    }).send(res);
  }

  async login(req, res, __) {
    new SuccessResponse({
      metadata: await AuthService.login(req, res),
    }).send(res);
  }
}

module.exports = new AuthControllers();
