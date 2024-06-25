'use strict';

//* LIB
const express = require('express');
const router = express.Router();

//* REQUIRE
const { asyncHandler } = require('../../../../helpers/asyncHandler');
const AuthControllers = require('../../controllers/auth.controller');
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a user
 *     description: |
 *       Authenticates a user by email and password.
 *       Possible reasons for a bad request include missing fields, invalid email, password wrong, or email not found.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password.
 *     responses:
 *       200:
 *         description: Successfully authenticated. Returns user info and access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The user's email.
 *                 access_token:
 *                   type: string
 *                   description: JWT access token for the session.
 *       400:
 *         description: Bad request (invalid email, password wrong, or email not found.)
 *       500:
 *         description: Internal server error.
 */
router.post('/login', asyncHandler(AuthControllers.login));

module.exports = router;
