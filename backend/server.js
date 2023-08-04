import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import  userRouter from './routers/userRouter.js'
const port=process.env.PORT||3001;
const app=express()

app.use('/api/users',userRouter)

app.get('/',(req,res)=>res.send('server is connected'))

app.listen(port,()=>{console.log(`Server connected to ${port}`)})