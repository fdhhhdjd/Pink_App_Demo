'use strict';

//* REQUIRE
const { Ok } = require('../../../cores/success.response');
const VehicleService = require('../services/vehicle.service');

class VehicleControllers {
  async getListVehicle(_, res, __) {
    new Ok({
      metadata: await VehicleService.listVehicle(),
    }).send(res);
  }
}

module.exports = new VehicleControllers();
