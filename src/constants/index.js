const NODE_ENV = {
  DEV: 'DEV',
  PRO: 'PRO',
};

const ENABLE_IP = 'trust proxy';

const LIMIT = {
  _5_MB: '5mb',
};
const TYPE_DATABASE = {
  REDIS_MASTER: 1,
};

const REQUEST = {
  _WINDOW_MS: 1 * 60 * 1000,
  _MAX: 100,
};

module.exports = {
  NODE_ENV,
  ENABLE_IP,
  LIMIT,
  TYPE_DATABASE,
  REQUEST,
};
