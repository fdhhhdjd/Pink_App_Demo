//* LIB
const Knex = require('knex');

//* REQUIRE
const {
  pg: { host, port, user, password, database },
} = require('../configs/pg.config');
const { NODE_ENV } = require('../constants');

const URL_PG = `postgresql://${user}:${password}@${host}:${port}/${database}`;

const client = {};
let connectTimeout;

const handleTimeoutError = () => {
  connectTimeout = setTimeout(() => {
    console.error('Failed to connect to PostgreSQL database');
    throw new Error('Failed to connect to PostgreSQL database');
  }, 10000);
};

const handleEventConnect = ({ connection }) => {
  connection
    .raw('SELECT 1')
    .then(_ => {
      console.info('CONNECTED TO POSTGRESQL SUCCESS 🐘 !!');
      clearTimeout(connectTimeout);
      return _;
    })
    .catch(err => {
      console.error('Failed to connect to PostgreSQL database', err);
      handleTimeoutError();
    });
};

const initDatabase = () => {
  const knexInstance = Knex({
    client: 'pg',
    connection: URL_PG,
    pool: {
      min: 10,
      max: 20,
      acquireTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
    },
    debug: process.env.NODE_ENV === NODE_ENV.DEV,
  });
  client.instanceConnect = knexInstance;
  handleEventConnect({ connection: knexInstance });
};

const getDatabase = () => client.instanceConnect;

const closeDatabase = () => {
  if (client.instanceConnect) {
    client.instanceConnect.removeAllListeners();
    clearTimeout(connectTimeout);
    if (client.instanceConnect.connection) {
      client.instanceConnect.destroy(() => {
        console.info('Disconnected from PostgreSQL database.');
      });
    }
  }
};

module.exports = { initDatabase, closeDatabase, getDatabase };
