const staffmodel = require('../Model/staffModel');

const staffController = {
   addstaff : async(req,res)=>{
        try{
            const {staffname, age, mobile_number, address, position, joining_date} = req.body;
            
            const newStaff = new staffmodel({
                staffname,
                age,
                mobile_number,
                address,
                position,
                joining_date
            });

            if(!staffname,!age,!mobile_number,!address,!position,!joining_date){
                res.status(500).json({message : "Please Fill All Mandatory Fields"})
            }
    
            const savedStaff = await newStaff.save()
    
            res.status(200).json({message : "New staff added", savedStaff})
    
    
        }catch(error){
            res.status(400).json({error : error.message});        
        }
    },

    getstaff : async(req,res)=>{
        try{
            const staffs = await staffmodel.find({});

            return res.json({message : "staff details got", staffs})
        }catch(error){
            return res.json({ error: 'Token is invalid'});
        }
    }
}

module.exports = staffController;