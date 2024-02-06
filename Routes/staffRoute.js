const express = require('express');
const authMiddleware = require('../middleware/auth')
const staffController = require('../Controller/staffController');

const staffRouter = express.Router();

staffRouter.post('/addstaff',authMiddleware.verifyToken,  staffController.addstaff);

staffRouter.get('/getstaff',  staffController.getstaff);

module.exports = staffRouter;