const supplierModel = require('../Model/supplierModel');

const supplierController = {
    addsupplier : async(req,res)=>{
        try{
            const {suppliername, mobile_number, supplied_item, payment, supplied_date } = req.body;
            
            const newSupplier = new supplierModel({
                suppliername,
                mobile_number,
                supplied_item,
                payment,
                supplied_date            
            });
            if( !suppliername, !mobile_number, !supplied_item, !payment, !supplied_date ){
                res.status(500).json({message : "Please Fill All Mantatory Input Fields"})
                }
    
            const savedSupplier = await newSupplier.save()
    
            res.status(200).json({message : "New Supplier Added Successfully!!!", savedSupplier})
    
    
        }catch(error){
            res.status(400).json({error : error.message});        
        }
    },

    getsupplier :  async(req,res) =>{
           try{
            const suppliers = await supplierModel.find({})      
                  
           return res.status(200).json({message : "Supplier details to UI", suppliers})

           }catch(error){

           return res.status(400).json({error : error.message})
           }
        }
    
}

module.exports = supplierController;