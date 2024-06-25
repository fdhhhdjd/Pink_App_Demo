'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const UserControllers = require('../../controllers/user.controller');

router.use(AuthMiddleware.checkToken);

router.get('/profile', AuthMiddleware.checkToken, asyncHandler(UserControllers.getProfile));

module.exports = router;
