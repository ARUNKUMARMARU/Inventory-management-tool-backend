const attendenceModel = require('../Model/attendenceModel');

const attendenceController = async(req,res)=>{
    try{
        const {staffname, date, status} = req.body;

        const newAttendence = new attendenceModel({
            staffname,
            date,
            status
        });
        const savedAttendence = await newAttendence.save();
        res.status(200).json({message:"Today attendence added", savedAttendence});

    }catch(error){
        res.status(500).json({error : error.message})
    }
};

module.exports = attendenceController;