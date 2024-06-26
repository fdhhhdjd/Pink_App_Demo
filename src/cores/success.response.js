'use strict';

//* REQUIRE
const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode');

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    metadata = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res, _ = {}) {
    return res.status(this.status).json(this);
  }
}

class Ok extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}

class Created extends SuccessResponse {
  constructor({
    option = {},
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    metadata = {},
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
    this.option = option;
  }
}
module.exports = {
  Ok,
  Created,
};
