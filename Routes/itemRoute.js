const express = require('express');
const authMiddleware = require('../middleware/auth')
const itemController = require('../Controller/itemController');

const itemRouter = express.Router();
itemRouter.post('/saveitem',authMiddleware.verifyToken,  itemController.additem);
itemRouter.get('/getitem',authMiddleware.verifyToken,  itemController.getitem);

module.exports = itemRouter;
