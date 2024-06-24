//* LIB
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

const app = express();
require('dotenv').config();

//* REQUIRE
const {
  app: { morgan: morganConfig, node },
} = require('./configs/app.config');
const { NODE_ENV, LIMIT } = require('./constants');
const RateLimitIp = require('./middlewares/rateLimit.middleware');
const { StatusCodes, ReasonPhrases } = require('./utils/httpStatusCode');

app.use(morgan(morganConfig));
app.enable();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(
  express.json({
    limit: LIMIT._5_MB,
  })
);
app.use(RateLimitIp);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//* PG
require('./dbs/init.knex').initDatabase();

//* V1
app.use('/api', require('./app/v1/routes'));

//* Error
app.use((_, __, next) => {
  const ErrorCode = new Error(StatusCodes.NOT_FOUND);
  ErrorCode.status = StatusCodes.NOT_FOUND;
  return next(ErrorCode);
});

app.use((error, __, res, ____) => {
  const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

  const response = {
    message,
    status: statusCode,
  };

  const checkNodeApp = node === NODE_ENV.DEV;
  if (checkNodeApp) {
    Object.assign(response, { stack: error.stack });
  }

  return res.status(statusCode).json(response);
});

module.exports = app;
