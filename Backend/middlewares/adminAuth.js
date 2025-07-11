import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {

    try {
        const {token} = req.header;
    
        if(!token) {
            return res.json({success: false, message: "Not autheorized Please login."})
        }
    
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success: false, message: "Not autheorized Please login."})
        }
    
        next();
        
    } catch (error) {
        console.log("ERROR -", error);
        res.json({success: false, message: error.message});
    }
}

export default adminAuth;