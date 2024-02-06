const itemModel = require('../Model/itemModel');

const itemController = {
    additem : async(req,res)=>{
        try{
            const {itemname, quantity, unit_price, category, supplier, received_date} = req.body;
    
            const newItem = new itemModel({
                itemname,
                quantity,
                unit_price,
                category,            
                supplier,
                received_date
            });
            const saveditem = await newItem.save();
            res.status(200).json({message:"New item added successfully", saveditem});
    
        }catch(error){
            res.status(500).json({error : error.message})
        }
    },

    getitem : async(req,res)=>{
        try{
            const item = await itemModel.find({});           
    
            return res.json({message : "Items details ready to UI", item})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    }
}

module.exports = itemController;