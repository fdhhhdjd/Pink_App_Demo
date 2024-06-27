const { v4: uuidv4 } = require('uuid');

const { POINTS_OF_INTEREST } = require('../constants');

const staffPointsOfInterest = [
  {
    id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.POS,
    latitude: 12.266908,
    longitude: 109.152148,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.POS,
    latitude: 12.244763,
    longitude: 109.13014,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.POS,
    latitude: 12.2634,
    longitude: 109.173741,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.POS,
    latitude: 12.272887,
    longitude: 109.110651,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.POS,
    latitude: 12.270732,
    longitude: 109.148148,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.PARK,
    latitude: 12.260206,
    longitude: 109.170941,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.PARK,
    latitude: 12.239373,
    longitude: 109.123629,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.PARK,
    latitude: 12.248335,
    longitude: 109.146824,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.PARK,
    latitude: 12.264837,
    longitude: 109.122076,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.PARK,
    latitude: 12.270732,
    longitude: 109.148148,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.REPAIR_STATION,
    latitude: 12.262254,
    longitude: 109.130147,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.REPAIR_STATION,
    latitude: 12.251811,
    longitude: 109.114089,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.WAREHOUSE,
    latitude: 12.262974,
    longitude: 109.113268,
  },
  {
    device_id: `pink_app_${uuidv4().split('-')[0]}`,
    point_type: POINTS_OF_INTEREST.WAREHOUSE,
    latitude: 12.23857,
    longitude: 109.133496,
  },
];

module.exports = staffPointsOfInterest;
