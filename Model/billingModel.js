const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    s_no : Number,
    items : {
        type : String,
        res : "item",
    },
    quantity : Number,
    unit_price : {
        type : String,
        ref : 'item',
    },
    amount : Number,
    total_amount : Number,
    Payment_method : String,
    bill_date : {
        type : Date,
        default : Date.now,
    },
    bill_number : Number
});

module.exports = mongoose.model('bill', billingSchema);