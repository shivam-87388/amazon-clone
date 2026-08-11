const express = require('express');
const router = express.Router();
const user = require("../models/UserSchema");

//create account
router.post("/create_user", async(req,res)=>{
    try {
        const existUser = await user.find
        res(200).json({
            message:"sucessfully account created"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})