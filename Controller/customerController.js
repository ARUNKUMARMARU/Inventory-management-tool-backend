const customerModel = require('../Model/customerModel');

const customerController = {
    addcustomer : async(req,res)=>{
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
    },

    getcustomer : async(req,res)=>{
        try{
            const customer = await customerModel.find({});           
    
            return res.json({message : "customer details ready to UI", customer})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    },

    editcustomer: async(req,res)=>{
        try{
            const id = req.body._id
            
            const {customername, mobile_number, total_purchase} = req.body;    
            
            const updatedCustomer = await customerModel.findByIdAndUpdate(id,{customername, mobile_number, total_purchase}, { new: true })   
                 
    
            return res.json({message : "Customer details updated successfully", customer:updatedCustomer})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    },

    deletecustomer : async(req,res)=>{
        try{
            const id = req.params.id;   
                    
            const result = await customerModel.findByIdAndDelete(id);
            if(result){
                return res.json({message : `${result.customername}'s Details Deleted Successfully`});
            }else{
                return res.json({message:"Error while deleting the customer details."})
            }
           
        }catch(error){
            return res.json({message:"Invalid Token"})
        }
    },

    editamount : async(req,res)=>{
        try{
            
            const {mobileNo,totalAmount} = req.body;  
            
            const result = await customerModel.find({mobile_number:mobileNo});
         
           if(result==[]){
            return res.json({message:'This Mobile Number Does Not Exists'})            
           }else{
            const old = result[0].total_purchase;
          const new1=parseFloat(old)+parseFloat(totalAmount);         
         
         await customerModel.updateOne({mobile_number:mobileNo},{total_purchase:new1});
         return res.json({message:'Total Amount updated'})
            
           }

           
        }catch(error){
            return res.json({message:"Invalid Token"})
        }
    }

    
}

module.exports = customerController;