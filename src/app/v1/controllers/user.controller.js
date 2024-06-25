'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const UserService = require('../services/user.service');

class UserControllers {
  async getProfile(req, res, __) {
    new Ok({
      metadata: await UserService.profile(req),
    }).send(res);
  }

  async listUser(req, res, __) {
    new Ok({
      metadata: await UserService.listUser(req),
    }).send(res);
  }
}

module.exports = new UserControllers();
