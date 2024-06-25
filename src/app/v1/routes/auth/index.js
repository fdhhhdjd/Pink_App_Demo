'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthControllers = require('../../controllers/auth.controller');

router.post('/login', asyncHandler(AuthControllers.login));

module.exports = router;
