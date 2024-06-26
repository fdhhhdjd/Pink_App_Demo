'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const OrderControllers = require('../../controllers/order.controller');

router.use(AuthMiddleware.checkToken);

router.get('/list', AuthMiddleware.checkToken, asyncHandler(OrderControllers.getListOrder));

module.exports = router;
