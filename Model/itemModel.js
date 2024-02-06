const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemname : String,
    unit_price : Number,
    category : String,
    quantity : Number,
    supplier : String,
    received_date : Date,
        
});

module.exports = mongoose.model("item", itemSchema)