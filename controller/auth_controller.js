import userModel from '../models/user_model.js'

export const registerController=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name){
            return res.status(400).send({
                success:false,
                message:'Name is required'
            })
        }
        if(!email){
            return res.status(400).send({
                success:false,
                message:'Email is required'
            })
        }
        if(!password){
            return res.status(400).send({
                success:false,
                message:'Password is required'
            })
        }
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Email already register please login'
            })
        }
        const user=await userModel.create({name,email,password})
        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user,
        })
    }catch(error){
        console.log(error)
        res.status(400).send({
            message:'Error in register Controller',
            succes:false,
            error
        })
    }
}