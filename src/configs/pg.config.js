const DEV = {
  pg: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
};

const PRO = {
  pg: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
};

const configsRedis = {
  DEV,
  PRO,
};

const getConfigsPG = env => {
  if (env === process.env.NODE_ENV) return configsRedis.DEV;
  if (env === process.env.NODE_ENV) return configsRedis.PRO;
  return null;
};

const env = process.env.NODE_ENV || 'DEV';

module.exports = getConfigsPG(env);
