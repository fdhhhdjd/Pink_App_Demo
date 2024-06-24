'use strict';

class AuthService {
  static async register(req) {
    return {
      email: req.body.email,
    };
  }

  static async login(req) {
    return {
      email: req.body.email,
    };
  }
}

module.exports = AuthService;
