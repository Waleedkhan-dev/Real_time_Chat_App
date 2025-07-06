import { User } from "../Modles/user.modle.js"
import bcrypt from "bcryptjs";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateToken } from "../utils/TokenGen.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cloudinary from "../lib/cloudinary.js";
import jwt from "jsonwebtoken"
const signUp = asyncHandler(async (req, res) => {
  const { fullName, password, email } = req.body
  console.log("Request Body:", req.body);
  try {
    if (!fullName || !password || !email) {
      throw new ApiError(400, "All fields are very important ");
    }

    if (password.length < 6) {
      throw new ApiError(400, "Password must be at least 6 characters");
    }

    const user = await User.findOne({ email });
    if (user) throw new ApiError(400, "Email already exists try another email");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token, // 👈 send token to frontend to store in localStorage
    });
    await newUser.save();
    if (!newUser) throw new ApiError(400, "Failed to create user");

    generateToken(newUser._id, res);

    res.status(201).json(
      new ApiResponse(201, {
        data: {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
        },


        meta: {
          token,
          message: "Signup successful"
        }
      })
    );
  } catch (error) {
    console.log("Error in signUp controllers:", error.message);
    throw new ApiError(500, "Internal server error");
  }
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      throw new ApiError(400, "Email not found give the correct email")
    }
    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword) {
      throw new ApiError(400, "Incorrect password")
    }

    generateToken(user._id, res)
    res.status(201).json(new ApiResponse(201, {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      profilePic: user.profilePic
    }))
  } catch (error) {

    throw new ApiError(500, "Internal server error");
  }
});

const logout = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json(new ApiResponse(200, "Logout successfully"));
  } catch (error) {

    throw new ApiError(500, "Internal server error");
  }
});


const updateProfile = asyncHandler(async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      throw new ApiError(404, "User profile not found");
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updateUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    if (!updateUser) {
      throw new ApiError(404, "User not found or profile update failed");
    }

    res.status(200).json({ updateUser });
  } catch (error) {
    console.error("Error in updateProfile controller:", error.message);
    res.status(error.statusCode || 500).json({
      error: error.message || "Internal server error"
    });
  }
});

const authcheck = asyncHandler(async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(401, "Unauthorized - No user found"));
    }
    res.status(200).json(new ApiResponse(200, req.user, "User authenticated successfully"));
  } catch (error) {
    console.error("Error in checkauth controller:", error.message);
    next(new ApiError(500, "Internal server error"));
  }
});
const getuser = async (req, res) => {
  try {
    const user = await User.find({}, "fullName, email, fullName")
    res.json(user)
  } catch (error) {
    console.log();
  }
}
export { signin, signUp, logout, updateProfile, authcheck, getuser };
