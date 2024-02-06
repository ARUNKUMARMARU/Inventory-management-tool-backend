const billingModel = require('../Model/billingModel');

const billingController ={ 
    addbill : async(req,res)=>{
    try{
        const allBill = await req.body;  
          
        const savedBill = await billingModel.insertMany(allBill)     
         
        
        res.status(200).json({message:"New bill added successfully", savedBill});

    }catch(error){
        res.status(500).json({error : error.message})
    }
},

getbill : async(req,res)=>{
    try{
        const bill = await billingModel.find({});

        return res.json({message : "Items details ready to UI", bill})
    }catch(error){
        return res.json({ error: 'Token is invalid'});
    }
}

}
module.exports = billingController; 