'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const PointControllers = require('../../controllers/point.controller');

router.use(AuthMiddleware.checkToken);

router.get('/user', AuthMiddleware.checkToken, asyncHandler(PointControllers.listPointUser));

router.get('/list', AuthMiddleware.checkToken, asyncHandler(PointControllers.listPoint));

module.exports = router;
