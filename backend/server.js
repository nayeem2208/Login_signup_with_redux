import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import { notFound,errorHandler } from "./middleware/errormiddleware.js";
import  userRouter from './routers/userRouter.js'
import connectDB from "./config/db.js";
const port=process.env.PORT||3001;

connectDB()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',userRouter)

app.get('/',(req,res)=>res.send('server is connected'))

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{console.log(`Server connected to ${port}`)})