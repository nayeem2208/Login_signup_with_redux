import express from "express";
const router = express.Router();
import {
  authUser,
  RegisterUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

router.post('/',RegisterUser)
router.post("/authUser", authUser);
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;
