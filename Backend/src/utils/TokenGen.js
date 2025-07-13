import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {
 const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
  expiresIn: "30m"
 })
 const refreshToken = jwt.sign({ id: userId, res }, process.env.JWT_SECRET, {
  expiresIn: "10d"
 })
 res.cookie("token", token, {
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_DEV === "development",
  maxAge: 30 * 60 * 1000
 })
 res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_DEV === "development",
  maxAge: 15 * 24 * 60 * 60 * 1000
 })
 return { token, refreshToken }
}
export { generateToken }