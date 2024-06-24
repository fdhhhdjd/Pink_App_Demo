const DEV = {
  JWT: {
    access_token_expiration_time: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    refetch_token_expiration_time: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
  },
};
const PRO = {
  JWT: {
    access_token_expiration_time: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    refetch_token_expiration_time: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
  },
};
const config = { DEV, PRO };

const env = process.env.NODE_ENV || 'DEV';

const getConfigJWT = env => {
  if (env === process.env.NODE_ENV) return config.DEV;
  if (env === process.env.NODE_ENV) return config.PRO;
  return null;
};

module.exports = getConfigJWT(env);
