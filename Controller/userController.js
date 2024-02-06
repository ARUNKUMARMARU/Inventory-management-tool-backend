const bcrypt = require('bcrypt');
const userModel = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const  config  = require('../utils/config');

const userController = {
    signup :async(req,res)=>{
        try{        
            const {email, name, password} = req.body;
            console.log(email);

            const checkEmail = await userModel.findOne({email});
            if(checkEmail){               
                return res.status(400).json({error : "Given mail id was already exists"})
            };

            const passwordHash = await bcrypt.hash(password, 10)    
            
            const newUser =new userModel ( {
                email,
                name,
                password : passwordHash
            });

          const savedUser = await newUser.save()

          res.status(200).json({message : "user created successfully", user : savedUser})

        }catch{
            res.status(500).json({error : "Error while creating user"})
        }

    },

    login : async(req,res)=>{
        try{
            const {email, password} = req.body;

           const user = await userModel.findOne({email});
           if(!user){
           return res.status(400).json({error : "This email id was not registered"})
           };

           const checkPassword = await bcrypt.compare(password, user.password);
           if(!checkPassword) {
            return res.status(400).json({error : "Invalid password"})
           };

           const token = jwt.sign({
            id : user._id,
            email : user.email,
            name : user.name
           }, config.JWT_SECRET )
           res.status(200).json({message : "User logged in succesfully", token : token})

        }catch(error){
            res.status(400).json({error : error.message})
        }
        
    }
};

module.exports = userController;