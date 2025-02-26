import jwt from 'jsonwebtoken'
import ApiError from '../utils/apiError.js'
import Admin from '../models/admin.model.js'

export const adminMiddleware =async(req,res,next)=>{
    
    try{
        const accessToken = req.cookies.accessToken

        if(!accessToken){
           next(new ApiError("Access Token is missing",401))
        }
   

        const decodedToken = jwt.verify(accessToken,process.env.SECRET_KEY);
       

        const admin = await Admin.findById(decodedToken.id).select('-password -refreshToken -resetPasswordToken -resetPasswordExpires')

        if(!admin){
             next(new ApiError("Admin not found",401))
        }

        req.user= admin
        next()
          
    }
    catch(err){
        next(new ApiError(err?.message || "Invalid access token", 401));
    }

}