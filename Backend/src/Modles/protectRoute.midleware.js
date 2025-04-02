import jwt from "jsonwebtoken"
import { User } from "./user.modle.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"


const protectRoute = asyncHandler(async (req, res, next) => {
 try {
  const token = req.cookies.jwt;
  console.log("token", token);

  if (!token) {
   return res.status(401).json(new ApiError(401, "Token not provided or unauthorized access"));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.userId).select("-password");
  console.log("user data show in the user", user);


  if (!user) {
   return res.status(404).json(new ApiError(404, "User not  found please try again"));
  }

  req.user = user;
  next();
 } catch (error) {
  console.log("Error in protectRoute: ", error.message);
  res.status(500).json(new ApiError(500, "Internal server error"));
 }
});
export { protectRoute };