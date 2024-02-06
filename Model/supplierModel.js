const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    suppliername : String,
    mobile_number : String,
    supplied_item : {
        type : String,
        ref : "item",
    },
    payment : String,
    supplied_date : {
        type : Date,
        ref : 'item',
    }

});

module.exports = mongoose.model('supplier', supplierSchema);