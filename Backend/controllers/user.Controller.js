import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const createTocken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

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

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createTocken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log("Contriller have error:", error);
        res.json({success: false, message: error.message})
    }
    
}

// route for admin login
const adminLogin = async(req, res) => {

}

export {loginUser, registerUser, adminLogin};