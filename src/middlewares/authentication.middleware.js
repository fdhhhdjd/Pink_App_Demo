//* LIB
const _ = require('lodash');

//* REQUIRE
const { UnauthorizedError } = require('../cores/error.response');
const { getInfoHeaders } = require('../helpers/headers');
const { verifyToken } = require('../helpers/token');

class AuthMiddleware {
  static async checkToken(req, __, next) {
    const { accessToken } = getInfoHeaders(req.headers);

    if (!accessToken) {
      return next(new UnauthorizedError('Token is required'));
    }
    const payload = await verifyToken(accessToken);
    req.infoAccessToken = payload;
    try {
      return next();
    } catch (error) {
      return next(new UnauthorizedError());
    }
  }
}

module.exports = AuthMiddleware;
