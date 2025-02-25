import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const adminSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        required:true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
        unique:true,
        trim:true 
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    resetPasswordToken:{
        type:String,
        select:false,
    },
    resetPasswordExpires:{
        type:Date,
        select:false,
    },
    loginAttempts:{
        type:Number,
        default:0,       
    },
    lockUntil:{
        type:Date
    },
 
},{
    timestamps:true
})


adminSchema.methods = {

    generateJWTToken : async function(){
         const token = jwt.sign({id:this._id,email:this.email,fullName:this.fullName, role:"Admin"}, process.env.SECRET_KEY)

         return token;
    },
    comparePasswords : async function(plainText){
             return await bcrypt.compare(plainText,this.password)
    }

};

const Admin = mongoose.model('Admin',adminSchema)

export default Admin;

