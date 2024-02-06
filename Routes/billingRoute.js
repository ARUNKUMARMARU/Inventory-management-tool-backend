const express = require('express');
const authMiddleware = require('../middleware/auth')
const billingController = require('../Controller/billingController');

const billingRouter = express.Router();

billingRouter.post('/billing',authMiddleware.verifyToken, billingController.addbill);
billingRouter.get('/getbill', authMiddleware.verifyToken, billingController.getbill);

module.exports = billingRouter;