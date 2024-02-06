const customerModel = require('../Model/customerModel');

const customerController = async(req,res)=>{
    try{
        const {customername, mobile_number, total_purchase} = req.body;

        const newCustomer = new customerModel({
            customername : customername,
            mobile_number : mobile_number,
            total_purchase : total_purchase
        });
        const savedCustomer = await newCustomer.save();
        res.status(200).json({message:"New customer details added successfully", savedCustomer});

    }catch(error){
        res.status(500).json({error : error.message})
    }
};

module.exports = customerController;