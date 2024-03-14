const express = require('express');
const authMiddleware = require('../middleware/auth')
const customerController = require('../Controller/customerController');

const customerRouter = express.Router();

customerRouter.post('/addcustomer',authMiddleware.verifyToken,  customerController.addcustomer);
customerRouter.get('/getcustomer',authMiddleware.verifyToken, customerController.getcustomer);
customerRouter.put('/editcustomer',authMiddleware.verifyToken, customerController.editcustomer);
customerRouter.delete('/deletecustomer/:id', authMiddleware.verifyToken, customerController.deletecustomer);
customerRouter.patch('/editamount', authMiddleware.verifyToken, customerController.editamount);

module.exports = customerRouter; 
