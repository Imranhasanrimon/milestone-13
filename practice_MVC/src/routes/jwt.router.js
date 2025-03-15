const express = require('express');
const { makeToken } = require('../controllers/jwt.controller');
const jwtRouter = express.Router();

jwtRouter.post("/", makeToken);

module.exports = { jwtRouter };