const express = require('express');
const router = express.Router();
const user = (../models/UserSchem)

//create account
router.post("/create_user", async(req,res)=>{
    try {
        const createUser = await user.create
        res(200).json({
            message:"sucessfully account created"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})