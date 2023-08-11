import  express  from "express";
import path from 'path';
import dotenv from 'dotenv'
dotenv.config()
import { notFound,errorHandler } from "./middleware/errormiddleware.js";
import  userRouter from './routers/userRouter.js'
import adminRouter from "./routers/adminRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const port=process.env.PORT||3001;

connectDB()
const app=express()

app.use(express.static('backend/public'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:2000", credentials: true }));

app.use('/api/users',userRouter)
app.use('/api/admin',adminRouter)


  

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{console.log(`Server connected to ${port}`)})