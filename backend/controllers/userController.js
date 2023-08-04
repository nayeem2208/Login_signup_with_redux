import asyncHandler from 'express-async-handler'

const auth=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'auth is valid'})
})

export {
    auth
}