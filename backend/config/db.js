import mongoose,{mongo} from "mongoose";

const connectDB=async ()=>{
    try{
        let conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected ${conn.connection.host}`)
    }
    catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB