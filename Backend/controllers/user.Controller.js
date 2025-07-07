import validator from "validator";
import bcrypt from "bcrypt";

import User from "../models/user.model.js";

// route for Login user
const loginUser = async(req, res) => {
    
}

// route for register user
const registerUser = async(req, res) => {
    // res.json({msg: "Register API Working"})

    try {
        const {name, email, password} = req.body;

        const exists = await User.findOne({email});

        if(exists) {
            return res.json({success: false, message: "User already Exist."})
        }

        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter valid email."})
        } 

        if(password.length < 8) {
            return res.json({success: false, message: "Please enter strong password."})
        } 


    } catch (error) {
        
    }
    
}

// route for admin login
const adminLogin = async(req, res) => {

}

export {loginUser, registerUser, adminLogin};