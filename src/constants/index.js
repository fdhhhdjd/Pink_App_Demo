const NODE_ENV = {
  DEV: 'DEV',
  PRO: 'PRO',
};

const LIMIT = {
  _5_MB: '5mb',
};

const REQUEST = {
  _WINDOW_MS: 1 * 60 * 1000,
  _MAX: 100,
};

const STATUS_VEHICLE = {
  FREE: 1,
  OCCUPIED: 2, // Đã có khách
  OUT_OF_BATTERY: 3, // Hết pin
  BROKEN: 4, // Hỏng
};

const POINTS_OF_INTEREST = {
  POS: 10, //'PoS', // Điểm bán/sạc
  PARK: 20, //'Park', // Điểm đỗ xe
  REPAIR_STATION: 30, //'Repair Station', // Trạm sửa chữa
  WAREHOUSE: 40, // 'Warehouse', // Kho
};

module.exports = {
  NODE_ENV,
  LIMIT,
  REQUEST,
  STATUS_VEHICLE,
  POINTS_OF_INTEREST,
};
