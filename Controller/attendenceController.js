const attendenceModel = require('../Model/attendenceModel');

const attendenceController = async(req,res)=>{
    try{
        
        const {date, details} = req.body;

        const newAttendence = new attendenceModel({        
            date,
            details
        });
        const savedAttendence = await newAttendence.save();
        res.status(200).json({message:"Today attendence added", savedAttendence});

    }catch(error){
        res.status(500).json({error : error.message})
    }
};

module.exports = attendenceController;