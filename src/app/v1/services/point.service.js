'use strict';

const { POINTS_OF_INTEREST } = require('../../../constants');
const staffPointsOfInterest = require('../../../data/point');

class PointService {
  static async listPointUser() {
    const filteredPoints = staffPointsOfInterest.filter(
      point =>
        point.point_type === POINTS_OF_INTEREST.POS || point.point_type === POINTS_OF_INTEREST.PARK
    );
    return filteredPoints;
  }

  static async listPoint() {
    return staffPointsOfInterest;
  }
}

module.exports = PointService;
