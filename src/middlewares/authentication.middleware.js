const { UnauthorizedError } = require('../cores/error.response');
const { getInfoHeaders } = require('../helpers/headers');
const { verifyToken } = require('../helpers/token');

class AuthMiddleware {
  static async checkToken(req, __, next) {
    try {
      const { accessToken } = getInfoHeaders(req.headers);

      if (!accessToken) {
        return next(new UnauthorizedError('Token is required'));
      }
      const payload = await verifyToken(accessToken);

      req.infoAccessToken = payload;
      return next();
    } catch (error) {
      return next(new UnauthorizedError('Token is correct'));
    }
  }
}

module.exports = AuthMiddleware;
