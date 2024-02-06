const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffname : String,
    age : Number,
    mobile_number : Number,
    address : Object,
    position : String,
    joining_date : Date
});

module.exports = mongoose.model("staff", staffSchema, "staffs")