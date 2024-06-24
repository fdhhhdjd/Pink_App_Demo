//* LIB
const _ = require('lodash');

//* REQUIRE
const { UnauthorizedError } = require('../cores/error.response');

class AuthMiddleware {
  static async checkToken(_, __, next) {
    try {
      return next();
    } catch (error) {
      return next(new UnauthorizedError());
    }
  }
}
module.exports = AuthMiddleware;
