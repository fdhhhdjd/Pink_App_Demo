'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const AuthControllers = require('../../controllers/auth.controller');

router.post('/login', asyncHandler(AuthControllers.login));

router.use(AuthMiddleware.checkToken);
router.get('/profile', asyncHandler(AuthControllers.getProfile));

module.exports = router;
