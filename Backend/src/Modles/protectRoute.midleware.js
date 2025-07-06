import jwt from "jsonwebtoken"
// import { User } from "./user.modle.js"
// import { asyncHandler } from "../utils/asyncHandler.js"
// import ApiError from "../utils/ApiError.js"
const protectRoute = (req, res, next) => {
 const authHeader = req.headers.authorization;
 console.log("Full Authorization Header:", authHeader);

 const token = authHeader?.split(" ")[1];
 console.log("Extracted Token:", token);

 if (!token) {
  return res.status(401).json({ message: "No token provided" });
 }

 try {
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Decoded Token:", decoded);

  req.user = decoded;
  next();
 } catch (err) {
  console.error("JWT Verify Error:", err.message);
  return res.status(401).json({ message: "Invalid or expired token" });
 }
};


export { protectRoute };