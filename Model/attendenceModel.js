const mongoose = require('mongoose');
const moment = require('moment');

const attendenceSchema = new mongoose.Schema({
    date :String,      
    details : Array
});

module.exports = mongoose.model('attendence', attendenceSchema, 'attendences');