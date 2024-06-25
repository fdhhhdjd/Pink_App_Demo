'use strict';

const generateVehicleData = require('../../../helpers/randomDummy');

class VehicleService {
  static async listVehicle() {
    return generateVehicleData(100);
  }
}

module.exports = VehicleService;
