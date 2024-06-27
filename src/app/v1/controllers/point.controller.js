'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const PointService = require('../services/point.service');

class PointControllers {
  async listPointUser(req, res, __) {
    new Ok({
      metadata: await PointService.listPointUser(req),
    }).send(res);
  }

  async listPoint(req, res, __) {
    new Ok({
      metadata: await PointService.listPoint(req),
    }).send(res);
  }
}

module.exports = new PointControllers();
