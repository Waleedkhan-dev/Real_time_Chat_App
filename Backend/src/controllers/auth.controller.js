import { User } from "../Modles/user.modle.js"
import bcrypt from "bcryptjs";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateToken } from "../utils/TokenGen.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const signUp = asyncHandler(async (req, res) => {
 const { fullName, password, email } = req.body
 try {
  if (!fullName || !password || !email) {
   throw new ApiError(400, "All fields are very important");
  }

  if (password.length < 6) {
   throw new ApiError(400, "Password must be at least 6 characters");
  }

  const user = await User.findOne({ email });
  if (user) throw new ApiError(400, "Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
   fullName,
   email,
   password: hashedPassword
  });

  await newUser.save();
  if (!newUser) throw new ApiError(400, "Failed to create user");

  generateToken(newUser._id, res);

  res.status(201).json(
   new ApiResponse(201, {
    _id: newUser._id,
    fullName: newUser.fullName,
    email: newUser.email,
    profilePic: newUser.profilePic
   })
  );
 } catch (error) {
  // console.log("Error in signUp controllers:", error.message);
  throw new ApiError(500, "Internal server error");
 }
});

const signin = asyncHandler(async (req, res) => {
 const { email, password } = req.body
 try {
  const user = await User.findOne({ email })
  if (!user) {
   throw new ApiError(400, "Email not found")
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
  // console.log("Error in signin controller:", error.message);
  throw new ApiError(500, "Internal server error");
 }
});

const logout = asyncHandler(async (req, res) => {
 try {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json(new ApiResponse(200, "Logout successfully"));
 } catch (error) {
  console.log("Error in logout controller:", error.message);
  throw new ApiError(500, "Internal server error");
 }
});

export { signin, signUp, logout };
