import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// route for Login user
const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return res.json({success: false, message: "User doesn't Exist."})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = createToken(user._id);
            res.json({success: true, token})
        }
        else {
            res.json({success: false, message: "Invalid credentials."})
        }

    } catch (error) {
        console.log("Login have error:", error);
        res.json({success: false, message: error.message})
    }
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

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log("Registration have error:", error);
        res.json({success: false, message: error.message})
    }
    
}

// route for admin login
const adminLogin = async(req, res) => {
    
    try {

        const {email, password} = req.body;
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);

            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Enter correct details."})
        }
        
    } catch (error) {
        console.log("Admin panel have an error:", error);
        res.json({success: false, message: error.message})
    }

}

export {loginUser, registerUser, adminLogin};