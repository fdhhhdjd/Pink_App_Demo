//* LIB
const rateLimit = require('express-rate-limit');

//* REQUIRE
const { REQUEST } = require('../constants');
const { ReasonPhrases, StatusCodes } = require('../utils/httpStatusCode');

class RateLimiter {
  constructor(
    options = {
      windowMs: 10 * 60 * 1000,
    }
  ) {
    this.windowMs = options.windowMs || REQUEST._WINDOW_MS;
    this.max = options.max || REQUEST._MAX;
    this.message = options.message || {
      status: StatusCodes.TOO_MANY_REQUESTS,
      message: ReasonPhrases.TOO_MANY_REQUESTS,
    };
    this.standardHeaders = options.standardHeaders !== undefined ? options.standardHeaders : true;
  }

  getLimiter() {
    return rateLimit({
      windowMs: this.windowMs,
      max: this.max,
      message: this.message,
      standardHeaders: this.standardHeaders,
    });
  }
}

const customOptions = {
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
  message: {
    status: StatusCodes.TOO_MANY_REQUESTS,
    message: 'Custom Too Many Requests Message',
  },
  standardHeaders: true,
};

const RateLimitIp = new RateLimiter(customOptions).getLimiter();

module.exports = RateLimitIp;
