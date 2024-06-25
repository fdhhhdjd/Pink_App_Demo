'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthMiddleware = require('../../../../middlewares/authentication.middleware');
const UserControllers = require('../../controllers/user.controller');

router.use(AuthMiddleware.checkToken);
/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieves the profile information of the authenticated user.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user's ID.
 *                 fullname:
 *                   type: string
 *                   description: The user's full name. Defaults to 'anonymous' if not provided.
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The user's email.
 *                 avatar:
 *                   type: string
 *                   description: The URL to the user's avatar.
 *                 address:
 *                   type: string
 *                   description: The user's address. Defaults to 'unknown' if not provided.
 *                 role:
 *                   type: integer
 *                   description: The user's role represented as a small integer.
 *                 registration_date:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp of the user's registration.
 *       400:
 *         description: Bad request (User not found.)
 *       401:
 *         description: Unauthorized. Bearer token is missing or invalid.
 */
router.get('/profile', AuthMiddleware.checkToken, asyncHandler(UserControllers.getProfile));

module.exports = router;
