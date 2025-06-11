import jwt from "jsonwebtoken"

const generateToken = (userId,res)=>{
 const toekn = jwt.sign({id:userId},process.env.JWT_SECRIT,{
  expiresIn:"30d"
 })
 res.cookie("token",toekn,{
  httpOnly:true,
  sameSite:"strict",
  secutre: process.env.NODE_DEV === "Production",
  magAge:30*24*60*60*1000
 })
}
export {generateToken}