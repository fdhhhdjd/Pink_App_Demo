'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const VehicleControllers = require('../../controllers/vehicle.controller');

router.use(AuthMiddleware.checkToken);

router.get('/list', AuthMiddleware.checkToken, asyncHandler(VehicleControllers.getListVehicle));

module.exports = router;
