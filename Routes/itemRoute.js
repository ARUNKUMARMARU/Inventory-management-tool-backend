const express = require('express');
const authMiddleware = require('../middleware/auth')
const itemController = require('../Controller/itemController');

const itemRouter = express.Router();
itemRouter.post('/saveitem',authMiddleware.verifyToken,  itemController.additem);
itemRouter.get('/getitem',authMiddleware.verifyToken,  itemController.getitem);
itemRouter.get('/getitemdetails/:itemname',authMiddleware.verifyToken,  itemController.getitemdetails);
itemRouter.put('/updatedetails',authMiddleware.verifyToken,  itemController.updatedetails);
itemRouter.put('/editquantity',authMiddleware.verifyToken,  itemController.editquantity);

module.exports = itemRouter;
