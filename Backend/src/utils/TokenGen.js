import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {
 const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
  expiresIn: "30d",
 });
 res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "development",
  sameSite: "strict",
  maxAge: 30 * 24 * 60 * 60 * 1000,
 });

 return token
};


// import jwt from "jsonwebtoken"

// const generateToken = (userId, res) => {
//  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//   expiresIn: "30d"
//  })
//  res.cookie("token", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: 'strict',
//   maxAge: 30 * 24 * 60 * 60 * 1000
//  })
// }
export { generateToken }