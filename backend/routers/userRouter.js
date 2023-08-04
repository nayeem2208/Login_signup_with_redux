import express from 'express'
const router=express.Router()
import { auth } from '../controllers/userController.js'


router.post('/authUser',auth)
router.get('/authUser',auth)

export default router;