const mongoose = require('mongoose');
const moment = require('moment');

const attendenceSchema = new mongoose.Schema({
    staffname :{
        type : String,
        ref : "staff"
    },
    date : {   
       type :Date,
       value : ()=> moment().format("dd-mm-yyyy")},
    status : String
});

module.exports = mongoose.model('attendence', attendenceSchema, 'attendences');