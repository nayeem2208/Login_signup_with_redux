import express from "express";
const router = express.Router();
import {
  authUser,
  RegisterUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post('/',RegisterUser)
router.post('/authUser', authUser);
router.post('/logout',logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

export default router;
