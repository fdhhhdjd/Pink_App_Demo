'use strict';

//* LIB
const express = require('express');

//* REQUIRE
const { StatusCodes, ReasonPhrases } = require('../../../utils/httpStatusCode');

const router = express.Router();

router.get('/v1', async (_, res, __) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: ReasonPhrases.OK,
    timestamp: Date.now(),
  };
  return res.status(StatusCodes.OK).json(healthCheck);
});

// Todo: 1. Auth
router.use('/v1/auth', require('./auth'));

module.exports = router;
