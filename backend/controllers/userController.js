import asyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await UserModel.findOne({ email });
  if (user) {
    if(await user.matchPassword(password)){
        generateToken(res, user._id);
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
    }
    else{
        res.status(400)
        throw new Error('invalid password')
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new error("User already exits");
  }
  const user = await UserModel.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0),
    })
  res.status(200).json({ message: "User Logged out "})
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user={
        id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }
  res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user=await UserModel.findById(req.user)
    console.log(req.body)
    if(user){
        user.name=req.body.name||user.name
        user.email=req.body.email||user.email
        if(req.body.password){
            user.password=req.body.password
        }
        const updatedUser=await user.save()
        res.status(200).json({
            id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email
        })
    }
    else{
        req.status(400)
        throw new Error('Invalid User')
    }
  res.status(200).json({ message: "UpdateProfile" });
});

export {
  authUser,
  RegisterUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
