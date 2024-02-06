const express = require('express');
const authMiddleware = require('../middleware/auth')
const customerController = require('../Controller/customerController');

const customerRouter = express.Router();

customerRouter.post('/addcustomer',authMiddleware.verifyToken,  customerController)

module.exports = customerRouter; 
