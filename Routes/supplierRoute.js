const express = require('express');
const authMiddleware = require('../middleware/auth')
const supplierController = require('../Controller/supplierController');

const supplierRouter = express.Router();

supplierRouter.post('/addsupplier',authMiddleware.verifyToken,  supplierController.addsupplier);
supplierRouter.get('/getsupplier',authMiddleware.verifyToken,  supplierController.getsupplier)


module.exports = supplierRouter;