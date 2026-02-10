import bcrypt from "bcrypt"
import validator from "validator";
import userModel from "../models/userModel";
import { JsonWebTokenError } from "jsonwebtoken";


const createToken = (id) => {
    return JsonWebTokenError.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req,res) => {
    
}

// Route for user register
const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;

        //check if the user already exists
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({success:false, message:"User already exists"})
        }

        // Validate the email format and password type
        if (!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }
        if (password.length < 8){
            return res.join({success:false, message:"Please enter a strong password"})
        }

        //hash the user's password for security reasons
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // create new user
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true,token})
        
    } catch (error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

// Route for admin Login
const adminLogin =async () => {
    
}

export {loginUser,registerUser, adminLogin}