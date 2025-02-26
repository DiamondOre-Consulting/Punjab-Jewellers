import jwt from 'jsonwebtoken'
import ApiError from '../utils/apiError'
import Admin from '../models/admin.model'

export const adminMiddleware =async(req,res,next)=>{
    
    try{
        const accessToken = req.cookies.accessToken

        if(!accessToken){
            throw new ApiError("Access Token is missing")
        }

        const decodedToken = jwt.verify(accessToken,process.env.SECRET_KEY);

        const admin = await Admin.findById(decodedToken._id).select('-password -refreshToken -resetPasswordToken -resetPasswordExpires')

        if(!admin){
            throw new ApiError(401, "Invalid Access Token")
        }

        req.user= admin
        next()
          
    }
    catch(err){
        throw new ApiError(401, error?.message || "Invalid access token")
    }

}