const express = require('express');
const router = express.Router();
const user = require("../models/User");
const bcrypt = require('bcrypt');

//login
router.post("/login", async(req,res)=>{
    
    try {
        const loginuser = await user.findOne({email:req.body.email})
        if (loginuser !=null) {
             const passwordMatch = await bcrypt.compare(
                req.body.password,
                findUser.password,
            );
            if (passwordMatch == true) {
                 return(res.status(200).json({message:"login sucessfull"}))
            } else {
              return(res.status(404).json({message:"login fail"}))  
            }
            
        }  
    } catch (error) {
        res.status(500).json({message:error.message})  
    }

})

//create account
router.post("/create_user", async(req,res)=>{
    try {
        const existUser = await user.findOne({email:req.body.email});  
        if (existUser !== null) {
            return res.status(400).json({
                message:"user already exist"
            })   
        } else  {
            const hassedPassword = await bcrypt.hash(req.body.password, 10) ;
            console.log(hassedPassword);
           const createUser = await user.create({
            name:req.body.name,
            email:req.body.email,
            password: hassedPassword,
           })
           return res.status(200).json({
           message:"sucessfully account created"
           })  
        }
        
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})


module.exports = router;