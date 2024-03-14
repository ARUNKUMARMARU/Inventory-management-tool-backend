const itemModel = require('../Model/itemModel');

const itemController = {
    additem : async(req,res)=>{
        try{
            const {itemname, quantity, unit_price, supplier, received_date} = req.body;
    
            const newItem = new itemModel({
                itemname,
                quantity,
                unit_price,                          
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
    },

    getitemdetails : async(req,res)=>{
        try{    
            const itemname = req.params.itemname;
            
        const itemdetails = await itemModel.findOne({itemname})
        
    
            return res.json({message : "Items details ready to UI", itemdetails})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    },

    updatedetails : async(req,res)=>{
        try{    
            const {itemname, quantity, unit_price, supplier} = req.body;
            
        await itemModel.updateOne({itemname},{$set : {unit_price,quantity,supplier}});                 
    
            return res.json({message : `${itemname}'s Details Updated Successfully`})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    },

    editquantity : async(req,res)=>{
        try{    
            const itemdetails = req.body;
            console.log(itemdetails)
            for(var item of itemdetails){
                const {items, quantity} = item;
                console.log(items,quantity)
                const result = await itemModel.findOne({itemname:items})
                const newQuantity = result.quantity-quantity
                await itemModel.updateOne({itemname:items}, {$set : {quantity : newQuantity}})
            }                   
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    }
}

module.exports = itemController;