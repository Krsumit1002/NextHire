import mongoose from 'mongoose';
import validator from 'validator'

const userSchema=new mongoose.Schema({
   name:{
    type:String,
    require:[true,'Please enter your name']
   },
   lastName:{
    type:String,
   },
   email:{
    type:String,
    require:[true,'Please enter your email'],
    unique:true,
    validate:validator.isEmail
   },
   password:{
    type:String,
    require:[true,'Please enter your password'],
   },
    locations:{
      type:String,
       default:'India' 
    }
},{timestamps:true})

export default mongoose.model('User',userSchema)