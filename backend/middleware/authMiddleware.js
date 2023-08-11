import jwt from 'jsonwebtoken'
import UserModel from "../models/userModel.js";
import asyncHandler from 'express-async-handler'


const protect=asyncHandler(async(req,res,next)=>{
    let token

    token=req.cookies.jwt
    if(token){
        try{
            let decoded= jwt.verify(token,process.env.JWT_SECRET)
            req.user=await UserModel.findById(decoded.userId).select('-password')
            next()
        }
        catch(error){
            res.status(401)
            throw new Error('invalid token')
        }
    }
    else{
        res.status(401)
        throw new Error('Unauthorised user,invalid token')
    }

})

export {protect} 