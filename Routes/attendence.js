const express = require('express');
const authMiddleware = require('../middleware/auth')
const attendenceController = require('../Controller/attendenceController');

const attendenceRouter = express.Router();
attendenceRouter.post('/attendence',authMiddleware.verifyToken, attendenceController);

module.exports = attendenceRouter;
