import jwt from "jsonwebtoken"
import { User } from "./user.modle.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"


const protectRoute = (req, res, next) => {
 const token = req.headers.authorization?.split(" ")[1];

 if (!token) {
  return res.status(401).json({ message: "No token provided" });
 }

 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
 } catch (err) {
  return res.status(401).json({ message: "Invalid or expired token" });
 }
};

export { protectRoute };