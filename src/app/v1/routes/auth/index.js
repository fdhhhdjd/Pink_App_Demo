'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const AuthControllers = require('../../controllers/auth.controller');

router.use(AuthMiddleware);
// Todo 3. Login
router.post('/login', asyncHandler(AuthControllers.login));

module.exports = router;
