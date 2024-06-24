const DEV = {
  app: {
    port: process.env.PORT,
    morgan: process.env.MORGAN || 'dev',
    node: process.env.NODE_ENV,
    web_server: process.env.WEB_SERVER,
    port_frontend: process.env.PORT_FRONTEND,
  },
};
const PRO = {
  app: {
    port: process.env.PORT || 5000,
    morgan: process.env.MORGAN || 'combined',
    node: process.env.NODE_ENV,
    web_server: process.env.WEB_SERVER,
    port_frontend: process.env.PORT_FRONTEND,
  },
};
const config = { DEV, PRO };

const env = process.env.NODE_ENV || 'DEV';

const getConfig = env => {
  if (env === process.env.NODE_ENV) return config.DEV;
  if (env === process.env.NODE_ENV) return config.PRO;
  return null;
};

module.exports = getConfig(env);
