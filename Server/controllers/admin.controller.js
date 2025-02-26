import Admin from '../models/admin.model.js';
import ApiError from '../utils/apiError.js';
import sendResponse from '../utils/sendResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import bcrypt from 'bcryptjs';


const cookieOptions ={
   maxAge: 7 * 24 * 60 * 60 * 1000,
   http:true,
   secure:false,
   sameSite:'none'
}



export const signin = asyncHandler(async(req,res)=>{
    
    
     
});

export const signup = asyncHandler(async(req,res)=>{
    
     const {fullName,email,phoneNumber,password} = req.validatedData

     const existedUser = await Admin.findOne({
         $or:[{email},{phoneNumber}]
     })

     if(existedUser){
          throw new ApiError("User already exists",400)
     }
     
     const hashedPassword = await bcrypt.hash(password,10)

     const admin = await Admin.create({fullName,email,phoneNumber,password:hashedPassword})
    
     const token = await admin.generateJWTToken()
     const refreshAccessToken = await admin.generateRefreshToken()
     admin.refreshAccessToken = refreshAccessToken
     await admin.save()

     admin.password = undefined
     admin.refreshAccessToken = undefined 
     admin.resetPasswordToken = undefined
     admin.resetPasswordExpires = undefined 


     res.cookie('token',token,cookieOptions)

     sendResponse(res,200,admin,"User created successfully")

    
});





