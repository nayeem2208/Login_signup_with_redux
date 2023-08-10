import mongoose from "mongoose";

const adminSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const adminModel=mongoose.model('Admin',adminSchema)
export default adminModel;