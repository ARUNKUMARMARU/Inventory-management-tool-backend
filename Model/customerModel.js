const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customername : String,
    mobile_number : Number,
    total_purchase : {
        type : String,
        ref : 'bill',
    } 
});

module.exports = mongoose.model('customer', customerSchema);